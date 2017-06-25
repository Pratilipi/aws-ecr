var Promise = require('bluebird');
var expect = require('chai').expect;


var config = {
  resourceType: 'TEST',
  port: 6379,
  hostIp: 'localhost',
  db: 15
};

var redisUtility = require('../redisUtility')(config);

describe('Single Get', function() {
  var testObject = {id: 5164567311155200, text: 'TestEntity'};

  before(function () {
    redisUtility.insertResourceInRedis(testObject.id, testObject);
  });

  it('should return an object when a valid param is passed', function (done) {
    redisUtility.getResourceFromRedis(testObject.id)
      .then(resource => {
        expect(resource).to.be.an('object');
        expect(resource).to.deep.equal(testObject);
        done();
      })
      ;
  });

  it('should return a null object when an invalid or unexisting param is passed', function (done) {
    redisUtility.getResourceFromRedis('randomKey')
      .then(resource => {
        expect(resource).to.be.null;
        done();
      })
      ;
  }); 

  it('should return a error when null param is passed', function (done) {
    redisUtility.getResourceFromRedis(null)
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      ;
  }); 

  it('should return a error when undefined param is passed', function (done) {
    redisUtility.getResourceFromRedis(undefined)
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      ;
  }); 

  it('should return a null object when empty string param is passed', function (done) {
    redisUtility.getResourceFromRedis('')
      .then(resource => {
        expect(resource).to.be.null;
        done();
      })
      ;
  });

  after(function () {
    redisUtility.deleteResourceInRedis(testObject.id)
    ;
  }); 
}); 

describe('Multiple Get', function() {
  var testObjects = [
    {id: 5164567311155200, text: 'TestEntity1'},
    {id: 12233445566778899, text: 'TestEntity2'}
  ]
  ;

  var testIds = testObjects.map(obj => {
    return obj.id;
  });

  before(function () {
    redisUtility.insertResourcesInRedis(testIds, testObjects);
  });

  it('should return an array when a valid array param is passed', function (done) {
    redisUtility.getResourcesFromRedis(testIds)
      .then(resources => {
        expect(resources).to.be.an('array');
        expect(resources).to.deep.equal(testObjects);
        done();
      })
      ;
  });

  it('should return an array of null objects when unexisting params are passed', function (done) {
    var incorrectTestIds = [123, 234];
    redisUtility.getResourcesFromRedis(incorrectTestIds)
      .then(resources => {
        expect(resources).to.be.an('array');
        expect(resources).to.deep.equal([null, null]);
        done();
      })
      ;
  }); 

  it('should return a error when one or more params is undefined or null', function (done) {
    redisUtility.getResourceFromRedis([null, undefined])
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      ;
  }); 

  after(function () {
    for( var i = 0; i < testIds.length; i++) {
      redisUtility.deleteResourceInRedis(testIds[i]);
    }    
  });

});

describe('Single Insert', function() {
  var testObject = {id: 5164567311155200, text: 'TestEntity'};

  it('should return okay when a valid key and object are passed', function (done) {
    redisUtility.insertResourceInRedis(testObject.id, testObject)
      .then(response => {
        expect(response).to.equal('OK');
        done();
      })
      ;
  });

  it('should return an error when a null key and valid object are passed', function (done) {
    redisUtility.insertResourceInRedis(null, testObject)
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      ;
  });

  it('should return an error when a undefined key and valid object are passed', function (done) {
    redisUtility.insertResourceInRedis(undefined, testObject)
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      ;
  });

  it('should return an error when a valid key and null object are passed', function (done) {
    redisUtility.insertResourceInRedis(testObject.id, null)
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      ;
  });

  it('should return an error when a valid key and undefined object are passed', function (done) {
    redisUtility.insertResourceInRedis(testObject.id, undefined)
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      ;
  });

  after(function () {
    redisUtility.deleteResourceInRedis(testObject.id)
    ;
  });
   
});

describe('Multiple Insert', function() {

  var testObjects = [
    {id: 5164567311155200, text: 'TestEntity1'},
    {id: 12233445566778899, text: 'TestEntity2'}
  ]
  ;

  var testIds = testObjects.map(obj => {
    return obj.id;
  });

  it('should return okay when valid keys array and valid objects array are passed', function (done) {
    redisUtility.insertResourcesInRedis(testIds, testObjects)
      .then(response => {
        expect(response).to.equal('OK');
        done();
      })
      ;
  });

  it('should return an error when atleast one keys array item is null and valid objects are passed', function (done) {
    redisUtility.insertResourceInRedis([null, 12233445566778899], testObjects)
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      ;
  });

  it('should return an error when atleast one keys array item is undefined and valid objects are passed', function (done) {
    redisUtility.insertResourceInRedis([undefined, 12233445566778899], testObjects)
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      ;
  });

  it('should return an error when valid keys and atleast one null object are passed', function (done) {
    redisUtility.insertResourceInRedis(testIds, [null, testObjects[1]])
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      ;
  });

  it('should return an error when valid key and atleast one undefined objects are passed', function (done) {
    redisUtility.insertResourceInRedis(testIds, [undefined, testObjects[1]])
      .catch(err => {
        expect(err.status).to.equal(400);
        done();
      })
      ;
  });

  after(function () {
    for( var i = 0; i < testIds.length; i++) {
      redisUtility.deleteResourceInRedis(testIds[i]);
    }    
  });


   
});     


describe('Get List', function() {
  var testListKey = 'testListKey';
  var testListItems = ['abc', 123, 'hello', 'yo'];

  before(function () {
    redisUtility.setListItems(testListKey, testListItems);
  });

  it('should return an array when a valid key is passed', function (done) {
    done();
    redisUtility.getListItems(testListKey, 0, -1)
      .then(resource => {
        expect(resource).to.be.an('array');
        expect(resource).to.deep.equal(testListItems);
        done();
      })
      ;
  });

  it('should return a null object when an invalid or unexisting param is passed', function (done) {
    redisUtility.getListItems('randomListKey', 0, -1)
      .then(resource => {
        expect(resource).to.be.an('array').that.is.empty;
        done();
      })
      ;
  }); 

  it('should return a error when null param is passed', function (done) {
   redisUtility.getListItems(null, 0, -1)
     .catch(err => {
       expect(err.status).to.equal(400);
       done();
     })
     ;
  }); 

  it('should return a error when undefined param is passed', function (done) {
   redisUtility.getListItems(undefined, 0, -1)
     .catch(err => {
       expect(err.status).to.equal(400);
       done();
     })
     ;
  }); 

  after(function () {
    redisUtility.deleteResourceInRedis(testListKey)
    ;
  }); 
}); 

describe('Set List', function() {
  var testListKey = 'testListKey';
  var testListItems = ['abc', 123, 'hello', 'yo'];

  before(function () {
    redisUtility.deleteResourceInRedis(testListKey)
    ;
  });

  it('should return length of items when a valid key and items are passed', function (done) {
    redisUtility.setListItems(testListKey, testListItems)
      .then(response => {
        expect(response).to.equal(testListItems.length);
        done();
      })
      ;
  });

  it('should return an error when a null key and valid items are passed', function (done) {
   redisUtility.setListItems(null, testListItems)
     .catch(err => {
       expect(err.status).to.equal(400);
       done();
     })
     ;
  });

  it('should return an error when a undefined key and valid items are passed', function (done) {
   redisUtility.setListItems(undefined, testListItems)
     .catch(err => {
       expect(err.status).to.equal(400);
       done();
     })
     ;
  });

  it('should return an error when a valid key and atleast one null item is passed', function (done) {
   redisUtility.setListItems(testListKey, [null, 1, 2])
     .catch(err => {
       expect(err.status).to.equal(400);
       done();
     })
     ;
  });

  it('should return an error when a valid key and atleast one undefined item is passed', function (done) {
   redisUtility.setListItems(testListKey, [undefined, 1, 2])
     .catch(err => {
       expect(err.status).to.equal(400);
       done();
     })
     ;
  });

  after(function () {
    redisUtility.deleteResourceInRedis(testListKey)
    ;
  }); 
   
});


describe('Delete Resource', function() {
  var testObject = {id: 5164567311155200, text: 'TestEntity'};

  before(function () {
    redisUtility.deleteResourceInRedis(testObject.id)
    ;
    redisUtility.insertResourceInRedis(testObject.id, testObject);
  });

  it('should return 1 when a valid key is passed', function (done) {
    redisUtility.deleteResourceInRedis(testObject.id)
      .then(response => {
        expect(response).to.equal(1);
        done();
      })
      ;
  });

  it('should return 0 when a inexistant key is passed', function (done) {
   redisUtility.deleteResourceInRedis('randomDeleteKey')
      .then(response => {
        expect(response).to.equal(0);
        done();
      })
     ;
  });

  it('should return an error when a undefined key is passed', function (done) {
   redisUtility.deleteResourceInRedis(undefined)
     .catch(err => {
       expect(err.status).to.equal(400);
       done();
     })
     ;
  });

  it('should return an error when a null key is passed', function (done) {
   redisUtility.deleteResourceInRedis(null)
     .catch(err => {
       expect(err.status).to.equal(400);
       done();
     })
     ;
  });

  after(function () {
    redisUtility.deleteResourceInRedis(testObject.id)
    ;
  }); 
   
});
