'use strict';

module.exports = datastoreUtility;

var datastoreClient = require( '@google-cloud/datastore' );

function datastoreUtility ( config ) {

  // private data
  var resourceType = config.resourceType;
  var datastore = datastoreClient( { projectId: config.projectId } );
  // API/data for end-user
  return {

    getResourceFromDb: function( id ) {  // TODO: add id here too
      var keyValue = isNaN( id ) ? id : parseInt( id );
      var key = datastore.key( [ resourceType, keyValue ] );
      return datastore.get( key )
      .then( ( res ) => {
        //remember this will return undefined if not found, not 404
        var entity = res[0];
        var idValue = entity[ datastore.KEY ].id ? parseInt( entity[ datastore.KEY ].id ) : entity[ datastore.KEY ].name;
        entity.id = keyValue;
        return entity;
      })
      ;
    },

    getResourcesFromDb: function( ids ) {
      var keys = ids
      .map( ( id ) => {
        var keyValue = isNaN( id ) ? id : parseInt( id );
        return datastore.key( [ resourceType, keyValue ] );
      })
      ;
      return datastore.get( keys )
      .then( ( res ) => {
        res[ 0 ].forEach( ( entity, index ) => {
          // TODO: check once if it also works for numeric ids
          var keyValue = entity[ datastore.KEY ].id ? parseInt( entity[ datastore.KEY ].id ) : entity[ datastore.KEY ].name;
          entity.id = keyValue;
        } );
        return res[ 0 ];
      })
      ;

    },

    queryResourcesFromDb: function( kind, filters, offset, limit ) {

      var query = datastore.createQuery( kind );
      if( limit !== null ) {
        query.limit( limit );
      }
      if( offset !==null ) {
        query.offset( offset );
      }
      if( filters !==null ) {
        for( var i = 0; i < filters.length; i++ ) {
          var resourceType = filters[ i ][ 0 ];
          var operator = filters[ i ][ 1 ];
          var value = filters[ i ][ 2 ];
          query.filter( resourceType, operator, value );
        }
      }
      return datastore.runQuery( query ).then( ( entities ) => {
        var arrayEntity = entities[ 0 ];
        for( var i = 0; i < arrayEntity.length; i++ ) {
          var objectEntity = arrayEntity[ i ];
          objectEntity.id = objectEntity[ datastore.KEY ].id;
        }
        return arrayEntity;
      } );
    }
  };
}
