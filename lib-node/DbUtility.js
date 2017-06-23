//Utility to perform CRUD operation on a DB currently Google Datastore

//EXPORTING THIS UTILITY FOR OTHER FILES TO USE
module.exports = DbUtility;

//GETTING THE GOOGLE DATASTORE LIBRARY TO PERFORM CRUD OPERATIONS
const datastoreModule = require( '@google-cloud/datastore' );
//GETTING THE LODASH LIBRARY TO PERFORM OBJECT AND ARRAY OPERATIONS
// const _ = require('lodash');

//THE FUNCTION TO BE EXPORTED
function DbUtility ( config ) {

  var kind = config.kind;
  var projectId = config.projectId;
  var schema = config.schema;
  var structure = schema.structure;
  var primaryKey = schema.primaryKey;
  const datastore = datastoreModule( { 'projectId' : projectId } );

  function getKey( id ) {
    return datastore.key([ kind, id ]);
  }

  function getNewKey() {
    return datastore.key([ kind ]);
  }

  function sortEntities( ids, entityMap ) {
    try {
      var entities = [];
      ids.forEach( ( id ) => {
        if( typeof id === 'string' ) {
          if( entityMap[ 'NAME_' + id ] ){
            entities.push( entityMap[ 'NAME_' + id ] );
          } else {
            entities.push( null );
          }
        } else {
          if( entityMap[ 'ID_' + id ] ){
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

  function processEntity( entity ) {
    try {
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

  function processEntities( entities ) {
    try {
      //EXECUTE ON EACH ENTITY
      entities.forEach( ( entity, index ) => {
        entities[ index ] = processEntity( entity );
      } );
      return entities;
    } catch( error ) {
      throw error;
    }
  }

  function toUpperCase( string ) {
    return string.toUpperCase();
  }

  return {

    query: function( filter ) {
      try {
        console.log(filter);
        //SELECT * FROM KIND
        var query = datastore.createQuery( kind );
        //WHERE (KEY = VALUE) (AND) (KEY = VALUE)...
        var keys = Object.keys( filter );
        var keysUpper = keys.map(toUpperCase);
        if( keys.length !== 0 ) {
          for( var i = 0; i < keys.length; i++ ) {
            if( keysUpper[ i ] === primaryKey ) {
              filter[ keys[ i ] ] = datastore.key( [ kind, filter[ keys[ i ] ] ] );
              keysUpper[ i ] = '__key__';
            }
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
              return ( [ null ] );
            } else {
              return processEntities( data[ 0 ] );
            }
          } )
          .catch( ( error ) => {
            throw error;
          } );
        } else {
          throw new Error( 'Empty Object' );
        }
      } catch(error) {
        return new Promise( ( resolve, reject ) => {
          reject( error );
        } );
      }
    },

    insert: function( data ) {
      try {
        var keys = Object.keys(data);
        if( keys.length !== 0 ) {
          var keysUpper = keys.map(toUpperCase);
          var newData ={};
          for( var i = 0; i < keysUpper.length; i++  ) {
            newData[ keysUpper[ i ] ] = data[ keys[ i ] ];
          }
          var key;
          var value;
          if( newData[ primaryKey ] == null ) {
            key = datastore.key( [ kind ] );
          } else {
            value = newData[ primaryKey ];
            key = datastore.key( [ kind, value ] );
            delete newData[ primaryKey ];
          }
          var task = {
            key: key,
            data: newData
          };
          return datastore.save( task )
          .then( () => {
            newData[ primaryKey ] = key.id ? parseInt( key.id ) : key.name;
            return schemaMaker( newData );
          } )
          .catch( ( error ) => {
            throw error;
          } );
        } else {
          throw new Error( 'Empty Object' );
        }
      } catch( error ) {
        return new Promise( ( resolve, reject ) => {
          reject( error );
        } );
      }
    },

    list: function( ids ) {

        if( ids.length !== 0 ) {
          var keys = ids.map( getKey );
          return datastore.get( keys ).then( ( dataArray ) => {
            var entityMap = {};
            processEntities( dataArray[ 0 ] ).forEach( ( entity ) => {
              if( typeof entity[ primaryKey ] === 'string' ) {
                entityMap[ 'NAME_' + entity[ primaryKey ] ] = entity;
              } else {
                entityMap[ 'ID_' + entity[ primaryKey ] ] = entity;
              }
            } );
            return sortEntities( ids, entityMap );
          } ).catch( ( error ) => {
            throw error;
          } );
        } else {
          throw new Error('Empty Array');
        }

    },

    delete: function( id ) {
      return datastore.delete( getKey( id ) )
      .catch( ( error ) => {
        throw error;
      });
    }
  };
}
