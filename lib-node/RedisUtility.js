module.exports = redisUtility;

var Promise = require( 'bluebird' );
var redisModule = require( 'redis' );
Promise.promisifyAll( redisModule.RedisClient.prototype );

function redisUtility ( config ) {

  // private data
  var resourceType = config.resourceType;
  var redisClient = redisModule.createClient( config.port, config.hostIp );

  redisClient.on( 'connect', () => {
    console.log( 'connected' );
  });

  // API/data for end-user
  return {

    getResourceFromRedis: function( id ) {
      return redisClient.getAsync( id )
        .then( JSON.parse )
      ;
    },

    getResourcesFromRedis: function( ids ) {
      return redisClient.mgetAsync( ids )
      .map( JSON.parse )
      ;
    },

    insertResourceInRedis: function( id, entity ) {
      return redisClient.setAsync( id, JSON.stringify( entity ) );
    },

    insertResourcesInRedis: function( ids, entities ) {

      var arrayCombined = ids.reduce( ( arr, v, i ) => {
        return arr.concat( v, JSON.stringify( entities[ i ] ) );  //combine ids and entities alternative acc to redis syntax
      }, [] );

      return redisClient.msetAsync( ...arrayCombined );
    },

    getListItems: function( key, start, end ) {

      return redisClient.lrangeAsync( key, start, end );
    },

    setListItems: function( key, values ) {

      return redisClient.rpushAsync( key, ...values );
    }
  };

}
