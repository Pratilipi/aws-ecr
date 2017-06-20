module.exports = datastoreUtility;

var datastoreClient = require( '@google-cloud/datastore' );

function datastoreUtility ( config ) {

  var kind = config.kind;
  var datastore = datastoreClient({ projectId:config.projectId });

  function getKey( id ) {
    return datastore.key([ kind, id ]);
  }
  
  function processEntity( entity ) {
    entity[ kind + '_ID' ] = entity[ datastore.KEY ].id
      ? entity[ datastore.KEY ].id
      : entity[ datastore.KEY ].name;
    return entity;
  }

  function processEntities( entities ) {
    entities.forEach( ( entity, index ) => {
      entities[ index ] = processEntity( entity );
    }
    return entities;
  }

  return {

    get: function( id ) {
      return datastore.get( getKey( id ) ).then( ( data ) => {
        return processEntity( data[0] );
      } );
    },

    getAll: function( ids ) {
      var keys = ids.map( ( id ) => { return getKey( id ); } );
      return datastore.get( keys ).then( ( data ) => {
        var entityMap = {};
        processEntities( data[ 0 ] ).forEach( entity ) {
          entityMap[ entity[ kind + '_ID' ] ] = entity;
        }
        var entities = [];
        ids.forEach( id ) {
          entities.push( entityMap[ id ] );
        }
      } );
    },

    runQuery: function( filter, orderBy, cursor, offset, limit ) {

      var query = datastore.createQuery( kind );
      
      if( filter != null ) {
        for( var i = 0; i < filter.length; i++ ) {
          query.filter(
            filter[ i ][ 0 ], // property
            filter[ i ][ 1 ], // operator
            filter[ i ][ 2 ], ); // value
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

      if( cursor != null )
        query.start( cursor );
        
      if( offset != null )
        query.offset( offset );
      
      if( limit != null )
        query.limit( limit );
      
      return datastore.runQuery( query ).then( ( data ) => {
        return processEntities( data[ 0 ] );
      } );
    
    },

    save: function( id, data ) {
      var entity = {
        key: getKey( id ),
        data: data
      };
      return datastore.save( entity ).then( () => {
        return processEntity( entity );
      } );
    },

   delete: function( kind, id ) {
     return datastore.delete( getKey( id ) );
    }
    
  };
  
}

