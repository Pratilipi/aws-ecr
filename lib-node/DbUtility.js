//Utility to perform CRUD operation on a DB currently Google Datastore

//EXPORTING THIS UTILITY FOR OTHER FILES TO USE
module.exports = DbUtility;

//GETTING THE GOOGLE DATASTORE LIBRARY TO PERFORM CRUD OPERATIONS
const datastoreModule = require( '@google-cloud/datastore' );

//GETTING THE LODASH LIBRARY TO PERFORM OBJECT AND ARRAY OPERATIONS
const _ = require('lodash');

//THE FUNCTION TO BE EXPORTED
function DbUtility ( config ) {

  //EXTRACT DATA FROM CONFIG OBJECT WHICH IS PASSED FROM CALLING SERVICE
  const kind = config.kind;
  const projectId = config.projectId;
  const schema = config.schema;
  const structure = schema.structure;
  const primaryKey = schema.primaryKey;

  //CREATE A DATASTORE CLIENT FOR A SPECIFIC PROJECT
  const datastore = datastoreModule( { 'projectId' : projectId } );

  //MAKE A PRIMARY KEY FOR DATASTORE WITH PROVIDED ID
  function getKey( id ) {
    return datastore.key([ kind, id ]);
  }

  //MAKE A PRIMARY KEY FOR DATASTORE WITHOUT ANY ID
  function getNewKey() {
    return datastore.key([ kind ]);
  }

  //CONVERT THE STRING TO UPPERCASE
  function toUpperCase( string ) {
    return string.toUpperCase();
  }

  //SORT ENTITYMAP IN THE ORDER OF IDS AND APPEND NULL FOR IDS HAVING NO ENTITY
  function sortEntities( ids, entityMap ) {
    try {
      var entities = [];
      ids.forEach( ( id ) => {
        //IF ID IS STRING THEN TAKE NAME_ID ELSE ID_ID
        if( typeof id === 'string' ) {
          if( entityMap[ 'NAME_' + id ] ) {
            entities.push( entityMap[ 'NAME_' + id ] );
          } else {
            entities.push( null );
          }
        } else {
          if( entityMap[ 'ID_' + id ] ) {
            entities.push( entityMap[ 'ID_' + id ] );
          } else {
            entities.push( null );
          }
        }
      } );
      return entities;
    } catch( error ) {
      throw error;
    }
  }
  //EXECUTE ON EACH ENTITY
  function processEntities( entities ) {
    try {
      entities.forEach( ( entity, index ) => {
        entities[ index ] = processEntity( entity );
      } );
      return entities;
    } catch( error ) {
      throw error;
    }
  }

  //MAKE ENTITY TO SPECIFIED SCHEMA STRUCTURE
  function processEntity( entity ) {
    try {
      //MAKE THE ENTITY TO SPECIFIED SCHEMA
      entity = schemaMaker( entity );
      //EXPLICIT CHECK FOR PRIMARY KEY IN DATASTORE
      if( structure[ primaryKey ].type === 'INTEGER' ) {
        entity[ primaryKey ] = parseInt( entity[ datastore.KEY ].id );
      } else {
        entity[ primaryKey ] = entity[ datastore.KEY ].name;
      }
      return entity;
    } catch( error ) {
      throw error;
    }
  }

  function schemaMaker( entity ) {
    try {
      //DELETE EXTRA KEYS FROM MAP WHICH ARE NOT IN SCHEMA STRUCTURE
      Object.keys( entity ).forEach( ( property ) => {
        if( structure[ property ] == null ) {
          delete entity[ property ];
        }
      });
      //ADD A DEFAULT VALUE TO NON EXISTING KEYS
      Object.keys( structure ).forEach( ( property ) => {
        if( entity[ property ] == null ) {
          entity[ property ] = structure[ property ].default;
        }
      });
      return entity;
    } catch( error ) {
      throw error;
    }
  }

  function checkSchema( entity ) {
    try {
      var b = 1;
      Object.keys( entity ).forEach( ( property ) => {
        if( structure[ property ] == null ) {
          b = 0;
        }
      });
      if( b === 0 ) {
        return false;
      } else {
        return true;
      }
    } catch( error ) {
      throw error;
    }
  }

  return {

    query: function( filter ) {
      try {
        //FILTER SHOULD BE A MAP
        if( !(Array.isArray( filter ) ) ) {
          //SELECT * FROM KIND
          var query = datastore.createQuery( kind );
          var keys = Object.keys( filter );
          //IF FIELDNAMES ARE NOT SPECIFIED THEN SENDING ERROR INSTEAD OF COMPLETE TABLE
          if( keys.length !== 0 ) {
            //HANDLING CASE WHERE FIELDNAMES ARE IN LOWER CASE
            var keysUpper = keys.map( toUpperCase );
            //WHERE ( KEY = VALUE ) ( AND ) ( KEY = VALUE )...
            for( var i = 0; i < keys.length; i++ ) {
              //EXPLICIT CHECK FOR DATASTORE PRIMARY KEY
              if( keysUpper[ i ] === primaryKey ) {
                filter[ keys[ i ] ] = getKey( filter[ keys[ i ] ] );
                keysUpper[ i ] = '__key__';
              }
              //( KEY = VALUE )
              query.filter(
                keysUpper[ i ], // property
                '=', // operator
                filter[ keys[ i ] ] //value
              );
            }
            //EXECUTE QUERY
            return datastore.runQuery( query )
            .then( ( data ) => {
              if ( data[ 0 ].length === 0 ) {
                //NO DATA FOUND
                return ( [ null ] );
              } else {
                //DATA FOUND AND BEING PROCESSED
                return processEntities( data[ 0 ] );
              }
            } )
            .catch( ( error ) => {
              throw error;
            } );
          } else {
            //NO FIELD IS PROVIDED
            throw new Error( 'Empty Object' );
          }
        } else {
          //FILTER IS NOT A MAP
          throw new Error( 'Wrong type of filter' );
        }
      } catch(error) {
        return new Promise( ( resolve, reject ) => {
          reject( error );
        } );
      }
    },

    insert: function( data ) {
      try {
        //DATA SHOULD BE A MAP
        if( !(Array.isArray( data ) ) ) {
          //KEY NAMES OF MAP
          var keys = Object.keys(data);
          //IF NO KEY NAMES
          if( keys.length !== 0 ) {
            //HANDLING CASE WHERE FIELDNAMES ARE IN LOWER CASE
            var keysUpper = keys.map(toUpperCase);
            var newData ={};
            //CREATING NEW DATA WHERE KEYS ARE IN UPPERCASE
            for( var i = 0; i < keysUpper.length; i++  ) {
              newData[ keysUpper[ i ] ] = data[ keys[ i ] ];
            }
            //CHECK IF NEWDATA IS CONFORMING TO THE SPECIFIED SCHEMA
            if( checkSchema( newData ) ) {
              var key;
              //CREATE KEY IF PROVIDED EXPLICITLY
              if( newData[ primaryKey ] == null ) {
                key = getNewKey();
              } else {
                var value = newData[ primaryKey ];
                key = getKey( value );
                //EXPLICIT DELETE OF KEY FROM DATA DUE TO DATASTORE SPECIFIC
                delete newData[ primaryKey ];
              }
              var task = {
                key: key,
                data: newData
              };
              //INSERT DATA IF IT NOT EXISTS
              return datastore.insert( task )
              .then( () => {
                newData[ primaryKey ] = key.id ? parseInt( key.id ) : key.name;
                //MAKE DATA IN SPECIFIED SCHEMA
                return schemaMaker( newData );
              } )
              .catch( ( error ) => {
                throw error;
              } );
            } else {
              //WRONG FIELDS PROVIDED NOT CONFORMING TO SCHEMA
              throw new Error( 'Wrong fields provided. It is not according to SCHEMA structure provided.');
            }
          } else {
            //EMPTY MAP IS PROVIDED
            throw new Error( 'Empty Object' );
          }
        } else {
          //DATA IS NOT A MAP
          throw new Error( 'Wrong type of data' );
        }
      } catch( error ) {
        return new Promise( ( resolve, reject ) => {
          reject( error );
        } );
      }
    },

    list: function( ids ) {
      try{
        //CHECK IF IDS IS ARRAY
        if( Array.isArray( ids ) ) {
          //IF ARRAY IS EMPTY
          if( ids.length !== 0 ) {
            //HANDLING CASE WHERE IDS HAVE NULL, UNDEFINED, 0, '' BECAUSE KEY GENERATION WILL FAIL
            var newIds = _.without( ids, null, undefined, '', 0, true, false );
            //IF VALID NEWIDS
            if( newIds.length !== 0 ) {
              //GENERATE KEY FOR EACH ID
              var keys = newIds.map( getKey );
              //FETCH KEYS FROM DATASTORE
              return datastore.get( keys ).then( ( dataArray ) => {
                var entityMap = {};
                //MAKE ENTITY IN DESIRED SCHEMA AND MAKE AN ENTITY MAP TO HAVE DUPLICATE ENTITY FOR DUPLICATE IDS
                processEntities( dataArray[ 0 ] ).forEach( ( entity ) => {
                  if( typeof entity[ primaryKey ] === 'string' ) {
                    entityMap[ 'NAME_' + entity[ primaryKey ] ] = entity;
                  } else {
                    entityMap[ 'ID_' + entity[ primaryKey ] ] = entity;
                  }
                } );
                //SORT THE IDS IN THE ORDER IDS ARE SENT AND ALSO APPEND NULL FOR IDS WHERE OBJECT IS NOT FOUND
                return sortEntities( ids, entityMap );
              } ).catch( ( error ) => {
                throw error;
              } );
            } else {
              //IDS CONTAIN ALL INVALID VALUES SO SENDING NULL FOR EACH ID
              var entityMap = {};
              return new Promise( ( resolve, reject ) => {
                resolve( sortEntities( ids, entityMap ) );
              } ) ;
            }
          } else {
            //NO ID IS PROVIDED
            throw new Error( 'Empty Object' );
          }
        } else {
          //WRONG TYPE OF IDS
          throw new Error( 'Not correct type of ids' );
        }
      } catch( error ) {
        return new Promise( ( resolve, reject ) => {
          reject( error );
        } );
      }
    },

    delete: function( id ) {
      try{
        if( !(Array.isArray( id ) ) ) {
          //KEY NAMES OF MAP
          var keys = Object.keys(id);
          //IF NO KEY NAMES
          if( keys.length === 1 ) {
            //HANDLING CASE WHERE FIELDNAMES ARE IN LOWER CASE
            var keysUpper = keys.map(toUpperCase);
            var idData ={};
            //CREATING NEW DATA WHERE KEYS ARE IN UPPERCASE
            for( var i = 0; i < keysUpper.length; i++  ) {
              idData[ keysUpper[ i ] ] = id[ keys[ i ] ];
            }
            if( idData[ primaryKey ] != null ) {
              return datastore.delete( getKey( idData[ primaryKey ] ) )
              .then( (data) => {
                if( data[ 0 ].indexUpdates === 0 ){
                  throw new Error( 'id doesn\'t exist' );
                } else {
                  return 1;
                }
              } )
              .catch( ( error ) => {
                throw error;
              });
            } else {
              throw new Error( 'Primary key not provided.');
            }
          } else{
            throw new Error( 'Wrong number of arguments');
          }
        } else {
          throw new Error( 'Not correct type of id' );
        }
      } catch( error ) {
        return new Promise( ( resolve, reject ) => {
          reject( error );
        } );
      }
    },

    update: function( id, data ) {
      try {
        //DATA SHOULD BE A MAP
        if( !(Array.isArray( id ) ) && !(Array.isArray( data ) ) ) {
          //KEY NAMES OF MAP
          var keys = Object.keys( data );
          var keysId = Object.keys( id );
          //IF NO KEY NAMES
          if( keys.length !== 0 && keysId.length === 1 ) {
            //HANDLING CASE WHERE FIELDNAMES ARE IN LOWER CASE
            var keysUpper = keys.map(toUpperCase);
            var keysIdUpper = keysId.map(toUpperCase);
            var newData ={};
            var newIdData = {};
            //CREATING NEW DATA WHERE KEYS ARE IN UPPERCASE
            for( var i = 0; i < keysUpper.length; i++  ) {
              newData[ keysUpper[ i ] ] = data[ keys[ i ] ];
            }
            for( i = 0; i < keysIdUpper.length; i++  ) {
              newIdData[ keysIdUpper[ i ] ] = id[ keysId[ i ] ];
            }
            if( newData[ primaryKey ] === undefined && newIdData[ primaryKey ] != null ) {
              //CHECK IF NEWDATA IS CONFORMING TO THE SPECIFIED SCHEMA
              if( checkSchema( newData ) ) {
                var key;
                //CREATE KEY
                var value = newIdData[ primaryKey ];
                key = getKey( value );
                var task = {
                  key: key,
                  data: newData
                };
                //UPDATE DATA IF IT EXISTS
                return datastore.update( task )
                .then( () => {
                  newData[ primaryKey ] = key.id ? parseInt( key.id ) : key.name;
                  //MAKE DATA IN SPECIFIED SCHEMA
                  return schemaMaker( newData );
                } )
                .catch( ( error ) => {
                  throw error;
                } );

              } else {
                //WRONG FIELDS PROVIDED NOT CONFORMING TO SCHEMA
                throw new Error( 'Wrong fields provided. It is not according to SCHEMA structure provided.');
              }
            } else {
              throw new Error( 'Primary key provided in Data object or Primary key is not provided in ID object' );
            }
          } else {
            //EMPTY MAP IS PROVIDED
            throw new Error( 'Empty Objects or Wrong number of keys in ID object.' );
          }
        } else {
          //DATA IS NOT A MAP
          throw new Error( 'Wrong type of data' );
        }
      } catch( error ) {
        return new Promise( ( resolve, reject ) => {
          reject( error );
        } );
      }
    }
  };
}
