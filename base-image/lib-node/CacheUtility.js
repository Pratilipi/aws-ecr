module.exports = cacheUtility;

var Promise = require('bluebird');
var redisModule = require('redis');
Promise.promisifyAll(redisModule.RedisClient.prototype);

function cacheUtility (config) {

  // private data
  var resource = config.resource;
  var db = config.db || 0;
  var redisClient = redisModule.createClient(config.port, config.hostIp, {'db':db, retry_strategy: function (options) {}
  });

  redisClient.on('connect', () => {
    console.log('Redis Connected');
  });

  redisClient.on('error', function(err) {
    console.log('Error connecting to redis ' + err);
  });

  return {

    get: function(id) {
      return new Promise((resolve, reject) => {
        if(arguments.length === 0) {
          var err = new Error('Bad Request');
          err.status = 400;
          reject(err);
        } else {
          var pr = redisClient.getAsync(id)
            .then(JSON.parse)
            ;
          resolve(pr)
        }
      });
    },

    list: function(ids) {
      return new Promise((resolve, reject) => {
        if(arguments.length === 0 || !Array.isArray(ids) || ids.length === 0) {
          var err = new Error('Bad Request');
          err.status = 400;
          reject(err);
        } else {
          var pr = redisClient.mgetAsync(ids)
            .map(JSON.parse)
            ;
          resolve(pr)
        }
      });
    },

    insert: function(id, entity) {
      return new Promise((resolve, reject) => {
        if(arguments.length < 2 || typeof(entity) != 'object'){
          var err = new Error('Bad Request');
          err.status = 400;
          reject(err);
        } else {
          var pr = redisClient.setAsync(id, JSON.stringify(entity))
            .then(reply => {
              return reply === 'OK';
            })
            ;
          resolve(pr)
        }
      });
    },

    delete: function(id) {
      return new Promise((resolve, reject) => {
        if(arguments.length === 0) {
          var err = new Error('Bad Request');
          err.status = 400;
          reject(err);
        } else {
          var pr = redisClient.delAsync(id)
            .then(reply => {
              return reply === 1;
            })
            ;
          resolve(pr)
        }
      });
    }
  };

}
