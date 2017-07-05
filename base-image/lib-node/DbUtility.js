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
  const datastoreClient = datastoreModule( { 'projectId' : projectId } );

  //HELPER UTILITY

  //MAKE A PRIMARY KEY FOR DATASTORE WITH PROVIDED ID NOTE: DATASTORE SPECIFIC
  function getKey( id ) {
    return datastoreClient.key([ kind, id ]);
  }

  //MAKE A PRIMARY KEY FOR DATASTORE WITHOUT ANY ID NOTE: DATASTORE SPECIFIC
  function getNewKey() {
    return datastoreClient.key([ kind ]);
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
        //IF ID IS STRING THEN TAKE NAME_ID ELSE ID_ID NOTE: DATASTORE SPECIFIC
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

  //MAKE ENTITY TO SPECIFIED SCHEMA STRUCTURE AND ADD PRIMARY KEY
  function processEntity( entity ) {
    try {
      //MAKE THE ENTITY TO SPECIFIED SCHEMA
      entity = makeSchema( entity );
      //EXPLICIT CHECK FOR PRIMARY KEY IN DATASTORE NOTE: DATASTORE SPECIFIC
      if( structure[ primaryKey ].type === 'INTEGER' ) {
        entity[ primaryKey ] = parseInt( entity[ datastoreClient.KEY ].id );
      } else {
        entity[ primaryKey ] = entity[ datastoreClient.KEY ].name;
      }
      return entity;
    } catch( error ) {
      throw error;
    }
  }

  //MAKE ENTITY TO SPECIFIED SCHEMA STRUCTURE
  function makeSchema( entity ) {
    try {
      //DELETE EXTRA KEYS FROM MAP WHICH ARE NOT IN SCHEMA STRUCTURE
      Object.keys( entity ).forEach( ( property ) => {
        if( structure[ property ] == null ) {
          delete entity[ property ];
        }
      });
      //ADD NON EXISTING KEYS WITH DEFAULT VALUE
      Object.keys( structure ).forEach( ( property ) => {
        if( entity[ property ] == null ) {
          //NOTE: TIMESTAMP SPECIFIC FOR CURRENT TIME
          if( structure[ property ].default === 'Date()' && structure[ property ].type === 'TIMESTAMP' ) {
            entity[ property ] = eval( structure[ property ].default );
          } else {
            entity[ property ] = structure[ property ].default;
          }
        }
      });
      return entity;
    } catch( error ) {
      throw error;
    }
  }

  //CHECK IF ENTITY CONFORMS TO THE SCHEMA STRUCTURE
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

    //PERFORMS QUERY ON TABLE WITH 'AND' OPERATION BETWEEN CONDITIONS WHERE CONDITIONS ARE EQUAL RELATIONS
    query: function( filter, offset, cursor, limit, orderBy ) {
      try {
        //SELECT * FROM KIND
        var query = datastoreClient.createQuery( kind );

        if( filter != null ) {
          //Filter should be an array
          if( Array.isArray( filter ) ) {
            for( var i = 0; i < filter.length; i++ ) {
              if(filter[i].length === 3) {
                //HANDLING CASE WHERE FIELDNAMES ARE IN LOWER CASE
                filter[ i ][ 0 ] = filter[ i ][ 0 ].toUpperCase();
                //EXPLICIT CHECK FOR DATASTORE PRIMARY KEY NOTE: DATASTORE SPECIFIC
                if( filter[ i ][ 0] === primaryKey ) {
                  filter[ i ][ 0 ] = '__key__';
                  filter[ i ][ 2 ] = getKey( filter[ i ][ 2 ] );
                }
                //WHERE ( KEY = VALUE ) ( AND ) ( KEY = VALUE )...
                query.filter(
                  filter[ i ][ 0 ], // property
                  filter[ i ][ 1 ], // operator
                  filter[ i ][ 2 ] ); // value
                } else {
                  throw new Error( 'Filter not having 3 fields' );
                }
              }
            }  else {
              throw new Error( 'Wrong Type of filter' );
            }
          }

          if( orderBy != null ) {
            if( Array.isArray( orderBy ) ) {
              orderBy.forEach( ( order ) => {
                order = order.toUpperCase();
                if( order.startsWith( '-' ) ) {
                  if(order === ('-'+primaryKey)){
                    order = '-__key__';
                  }
                  query = query.order( order.substr( 1 ), { descending:true } );
                } else {
                  if(order === primaryKey ){
                    order = '__key__';
                  }
                  query = query.order( order );
                }
              });
            } else {
              throw new Error( 'Wrong Type of order' );
            }
          }

          if( cursor != null ) {
            if( isNaN(cursor) || typeof cursor === 'object' ) {
              throw new Error( 'Wrong Type of cursor' );
            } else {
              query.start( Number(cursor) );
            }
          }

          if( offset != null ) {
            if( isNaN(offset) || typeof offset === 'object' ) {
              throw new Error( 'Wrong Type of offset' );
            } else {
              query.offset( Number(offset) );
            }
          }

          if( limit != null ) {
            if( isNaN(limit) || typeof limit === 'object' ) {
              throw new Error( 'Wrong Type of limit' );
            } else {
              if( Number(limit)>1000 ) {
                limit = 1000;
              }
              query.limit( Number(limit) );
            }
          } else {
            query.limit( 20 );
          }

          //EXECUTE QUERY
          return datastoreClient.runQuery( query )
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
      } catch(error) {
        return new Promise( ( resolve, reject ) => {
          reject( error );
        } );
      }
    },

    //INSERT DATA IN TABLE, PRIMARY KEY IS USED IF PROVIDED ELSE GENERATED ON ITS OWN
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

              newData = makeSchema( newData );
              //NOTE: DATASTORE SPECIFIC
              var key;
              //CREATE KEY IF PROVIDED EXPLICITLY
              if( newData[ primaryKey ] === structure[ primaryKey ].default ) {
                key = getNewKey();
              } else {
                var value = newData[ primaryKey ];
                key = getKey( value );
              }
              //NOTE: EXPLICIT DELETE OF KEY FROM DATA DUE TO DATASTORE SPECIFIC
              delete newData[ primaryKey ];
              var task = {
                key: key,
                data: newData
              };

              //INSERT DATA IF IT NOT EXISTS
              return datastoreClient.insert( task )
              .then( () => {
                //NOTE: DATASTORE SPECIFIC
                newData[ primaryKey ] = key.id ? parseInt( key.id ) : key.name;
                //MAKE DATA IN SPECIFIED SCHEMA
                return makeSchema( newData );
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

    //GET ENTITY FOR PRIMARY KEYS PROVIDED
    list: function( ids ) {
      try{
        //CHECK IF IDS IS ARRAY
        if( Array.isArray( ids ) ) {
          //IF ARRAY IS EMPTY
          if( ids.length !== 0 ) {
            //HANDLING CASE WHERE IDS HAVE NULL, UNDEFINED, 0, '', TRUE, FALSE BECAUSE KEY GENERATION WILL FAIL NOTE: DATASTORE SPECIFIC
            var newIds = _.without( ids, null, undefined, '', 0, true, false );

            //IF VALID NEWIDS
            if( newIds.length !== 0 ) {
              //GENERATE KEY FOR EACH ID NOTE: DATASTORE SPECIFIC
              var keys = newIds.map( getKey );

              //FETCH KEYS FROM DATASTORE
              return datastoreClient.get( keys ).then( ( dataArray ) => {
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

    //DELETE KEYS FOR ONLY PRIMARY KEYS PROVIDED
    delete: function( id ) {
      try{
        if( !(Array.isArray( id ) ) ) {
          //KEY NAMES OF MAP
          var keys = Object.keys(id);
          //ONLY ONE KEY NAME NOTE: DATASTORE SPECIFIC
          if( keys.length === 1 ) {
            //HANDLING CASE WHERE FIELDNAMES ARE IN LOWER CASE
            var keysUpper = keys.map(toUpperCase);
            var idData ={};
            //CREATING NEW DATA WHERE KEYS ARE IN UPPERCASE
            for( var i = 0; i < keysUpper.length; i++  ) {
              idData[ keysUpper[ i ] ] = id[ keys[ i ] ];
            }
            //IF PRIMARY KEY IS NOT GIVEN THEN ERROR
            if( idData[ primaryKey ] != null ) {
              //DELETE ID IF IT EXISTS
              return datastoreClient.delete( getKey( idData[ primaryKey ] ) )
              .then( (data) => {
                if( data[ 0 ].indexUpdates === 0 ){
                  throw new Error( 'Id doesn\'t exist' );
                } else {
                  return 1;
                }
              } )
              .catch( ( error ) => {
                throw error;
              });
            } else {
              //PRIMARY KEY IS NOT PROVIDED
              throw new Error( 'Primary key not provided.');
            }
          } else{
            //EXTRA FIELDS ARE PROVIDED
            throw new Error( 'Wrong number of arguments');
          }
        } else {
          //ID TYPE IS NOT CORRECT
          throw new Error( 'Not correct type of id' );
        }
      } catch( error ) {
        return new Promise( ( resolve, reject ) => {
          reject( error );
        } );
      }
    },

    //UPDATE ENTITY FOR PRIMARY KEY AND DATA PROVIDED
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
                newData = makeSchema( newData );
                //NOTE: EXPLICIT DELETE OF KEY FROM DATA DUE TO DATASTORE SPECIFIC
                delete newData[ primaryKey ];
                var key;
                //CREATE KEY NOTE: DATASTORE SPECIFIC
                var value = newIdData[ primaryKey ];
                key = getKey( value );
                var task = {
                  key: key,
                  data: newData
                };
                //UPDATE DATA IF IT EXISTS
                return datastoreClient.update( task )
                .then( () => {
                  newData[ primaryKey ] = key.id ? parseInt( key.id ) : key.name;
                  //MAKE DATA IN SPECIFIED SCHEMA
                  return makeSchema( newData );
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
    },

    //UPDATE ENTITY FOR PRIMARY KEY AND DATA PROVIDED
    patch: function( id, data ) {
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
              var key;
              //CREATE KEY
              var value = newIdData[ primaryKey ];
              key = getKey( value );
              return datastoreClient.get(key)
              .then( ( dataArray ) => {
                if( dataArray[ 0 ] === undefined ) {
                  throw new Error( 'id doesn\'t exist' );
                } else {
                  var dataEntity = dataArray[ 0 ];
                  for( var i = 0; i < keysUpper.length; i++ ) {
                    dataEntity[ keysUpper[ i ] ] = newData[ keysUpper[ i ] ];
                  }
                  dataEntity = makeSchema( dataEntity );
                  //NOTE: EXPLICIT DELETE OF KEY FROM DATA DUE TO DATASTORE SPECIFIC
                  delete dataEntity[ primaryKey ];
                  //CHECK IF NEWDATA IS CONFORMING TO THE SPECIFIED SCHEMA
                  if( checkSchema( dataEntity ) ) {
                    var task = {
                      key: key,
                      data: dataEntity
                    };
                    //UPDATE DATA IF IT EXISTS
                    return datastoreClient.update( task )
                    .then( () => {
                      dataEntity[ primaryKey ] = key.id ? parseInt( key.id ) : key.name;
                      //MAKE DATA IN SPECIFIED SCHEMA
                      return makeSchema( dataEntity );
                    } )
                    .catch( ( error ) => {
                      throw error;
                    } );
                  } else {
                    //WRONG FIELDS PROVIDED NOT CONFORMING TO SCHEMA
                    throw new Error( 'Wrong fields provided. It is not according to SCHEMA structure provided.');
                  }
                }
              } )
              .catch( (error) => {
                throw error;
              } );
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
    },

    //GET SINGLE PRIMARY KEY
    get: function( id ) {
      try {
        if( id == null || id === '' || id === 0 || typeof id === 'boolean') {
          return new Promise( ( resolve, reject ) => {
            resolve( null );
          } ) ;
        } else if( typeof id === 'number' || typeof id === 'string' ) {
          return datastoreClient.get( getKey( id ) ).then( ( dataArray ) => {
            var data = dataArray[ 0 ];
            if( data === undefined ) {
              return null;
            } else {
              return processEntity( data );
            }
          } ).catch( ( error ) => {
            throw error;
          } );
        } else {
          throw new Error( 'Wrong type of id' );
        }
      } catch(error) {
        return new Promise( ( resolve, reject ) => {
          reject( error );
        } );
      }
    }
  };
}
