module.exports = datastoreUtility;

var datastore = require( '@google-cloud/datastore' );

function datastoreUtility ( config ) {

  // private data
  var resourceType = config.resourceType;
  datastore = datastore( { projectId: config.projectId } );
  // API/data for end-user
  return {

    getResourceFromDb: function( id ) {  // TODO: add id here too
      var keyValue = isNaN( id ) ? id : parseInt( id );
      var key = datastore.key( [ resourceType, keyValue ] );

      return datastore.get( key )
      .then( ( res ) => {
        return res[ 0 ];
      })
      ;
    },

    getResourcesFromDb: function( ids ) {
      var keys = ids
      // .map( parseInt ) // TODO: find why it didnt work
      .map( ( id ) => {
        return datastore.key( [ resourceType, parseInt( id ) ] );
      })
      ;

      return datastore.get( keys )
      .then( ( res ) => {
        res[ 0 ].forEach( ( entity, index ) => {
          // ids[ index ] = entity[ datastore.KEY ].id;
          entity.id = parseInt( entity[ datastore.KEY ].id );
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
          objectEntity.id = parseInt(objectEntity[ datastore.KEY ].id);
        }
        return arrayEntity;
      } );
    },

    insertResourceInDb: function( kind, data ) {
      var key = datastore.key([kind]);
      var task = {
        key: key,
        data: data
      };
      return datastore.save(task)
      .then(() => {
        return parseInt(task.key.id);
      });
    },

    updateResourceInDb: function( kind, id, data ) {
      var key = datastore.key([kind,id]);
      var task = {
        key: key,
        data: data
      };
      return datastore.save(task);
    },

   deleteResourceInDb: function( kind, id ) {
     var key = datastore.key([kind,id]);
     return datastore.delete(key);
    }
  };
}
