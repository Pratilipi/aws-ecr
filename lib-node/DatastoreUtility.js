module.exports = datastoreUtility;

const datastoreModule = require( '@google-cloud/datastore' );
const _ = require('lodash');

function datastoreUtility ( config ) {

  var kind = config.kind;
  var projectId = config.projectId;
  const datastore = datastoreModule( { 'projectId' : projectId } );

  function getKey( id ) {
    return datastore.key([ kind, id ]);
  }

  function getNewKey() {
    return datastore.key([ kind ]);
  }

  function processEntity( entity ) {
    try {
      entity[ kind + '_ID' ] = entity[ datastore.KEY ].id ?
      parseInt( entity[ datastore.KEY ].id ) :
      entity[ datastore.KEY ].name;
      return entity;
    } catch( error ) {
      throw error;
    }
  }

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

  return {

    get: function( id ) {
      if( id == null || id === '' || id === 0 || typeof id === 'boolean') {
        return new Promise( ( resolve, reject ) => {
          resolve( null );
        } ) ;
      } else {
        return datastore.get( getKey( id ) ).then( ( dataArray ) => {
          var data = dataArray[ 0 ];
          if( data === undefined ) {
            return null;
          } else {
            return processEntity( data );
          }
        } ).catch( ( error ) => {
          throw error;
        } );
      }
    },

    getAll: function( ids ) {

      if( Array.isArray( ids ) ) {
          var newIds = _.without( ids, null, undefined, '', 0 );
          if( newIds.length !== 0 ) {
            var keys = newIds.map( getKey );
            return datastore.get( keys ).then( ( dataArray ) => {
              var entityMap = {};
              processEntities( dataArray[ 0 ] ).forEach( ( entity ) => {
                if( typeof entity[ kind + '_ID' ] === 'string' ) {
                  entityMap[ 'NAME_' + entity[ kind + '_ID' ] ] = entity;
                } else {
                  entityMap[ 'ID_' + entity[ kind + '_ID' ] ] = entity;
                }
              } );
              return sortEntities( ids, entityMap );
            } ).catch( ( error ) => {
              throw error;
            } );
          } else {
            var entityMap = {};
            return new Promise( ( resolve, reject ) => {
              resolve( sortEntities( ids, entityMap ) );
            } ) ;
          }
      } else {
        return new Promise( ( resolve, reject ) => {
          var error = new Error( 'Not correct type' );
          reject( error );
        } );
      }
    },

    runQuery: function( filter, orderBy, cursor, offset, limit ) {

      var query = datastore.createQuery( kind );

      if( filter != null ) {
        for( var i = 0; i < filter.length; i++ ) {
          query.filter(
            filter[ i ][ 0 ], // property
            filter[ i ][ 1 ], // operator
            filter[ i ][ 2 ] ); // value
          }
        }

        if( orderBy != null ) {
          orderBy.forEach( ( order ) => {
            if( order.startsWith( '-' ) ) {
              query = query.order( order.substr( 1 ), { descending:true } );
            } else {
              query = query.order( order );
            }
          });
        }

        if( cursor != null ) {
          query.start( cursor );
        }

        if( offset != null ) {
          query.offset( offset );
        }

        if( limit != null ) {
          query.limit( limit );
        }

        return datastore.runQuery( query ).then( ( data ) => {
          return processEntities( data[ 0 ] );
        } );

      },

      save: function( id, data ) {
        data = _.cloneDeep( data );
        if( ( typeof id === 'string' || typeof id === 'number' || id === null || id === undefined ) &&
        typeof data === 'object' && data !==null && !(Array.isArray( data ) ) ) {
          var key;
          if( id === null || id === 0 || id === '' || id === undefined ) {
            key = getNewKey();
            console.log(key);
          } else {
            key = getKey( id );
          }
          delete data[ kind + '_ID' ];
          var entity = {
            key: key,
            data: data
          };
          return datastore.save( entity ).then( () => {
            data[ kind + '_ID' ] = key.id ?
            parseInt( key.id ) :
            key.name;
            return data;
          } )
          .catch( ( error ) => {
            throw error;
          });
        } else {
          return new Promise( ( resolve, reject ) => {
            var error = new Error( 'Id or Data is not correct' );
            reject( error );
          } );
        }
      },

      delete: function( id ) {
        if( id === null || id === undefined || id === '' || id === 0 ) {
          return new Promise( ( resolve, reject ) => {
            resolve();
          } ) ;
        } else {
        return datastore.delete( getKey( id ) )
        .catch( ( error ) => {
          throw error;
        });
      }
      }

    };

  }
