const datastoreClient = require( './DatastoreUtility.js' );
var datastore = datastoreClient({ projectId:'devo-pratilipi', kind:'TEST' });

var schema = {

  TEST_ID:			{ type: 'INTEGER'	},
  SERIAL: {type: 'INTEGER'},
  NAME:			{ type: 'STRING'	},
  STATUS:			{ type: 'BOOLEAN'	},
  DATE:			{ type: 'TIMESTAMP'	}
};


var chai = require( 'chai' );
var expect = require( 'chai' ).expect;

describe('datastoreClientTests',function() {
  var data = {'name':'pratilipi'};
  describe('saveRequest', function() {
    it('save with no id and no data',function() {
      var get = datastore.save();
      var errorObject;
      get
      .catch((error) => {
        errorObject = error;
      });
      expect(errorObject).to.be.an('object').to.have.a.property('error');
    });
    it('save with id and no data',function() {
      var get = datastore.save(1);
      var errorObject;
      get
      .catch((error) => {
        errorObject = error;
      });
      expect(errorObject).to.be.an('object').to.have.a.property('error');
    });
    it('save with name and no data',function() {
      var get = datastore.save('1');
      var errorObject;
      get
      .catch((error) => {
        errorObject = error;
      });
      expect(errorObject).to.be.an('object').to.have.a.property('error');
    });
    it('save with no id and data',function() {
      var get = datastore.save(data);
      var errorObject;
      get
      .catch((error) => {
        errorObject = error;
      });
      expect(errorObject).to.be.an('object').to.have.a.property('error');

    });
    it('save with id and data',function() {
      var get = datastore.save(1,data);
      get.then((data1) => {
        data[TEST_ID]=1;
        expect(data1).to.be.equal.to(data);
      });
    });
    it('save with name and data',function() {
      var get = datastore.save('1',data);
      get.then((data1) => {
        data[TEST_ID]='1';
        expect(data1).to.be.equal.to(data);
      });
    });
    it('save with null and data',function() {
      var get = datastore.save(null,data);
      get.then((data1) => {
        expect(data1.TEST_ID).to.be.a('number');
        expect(data1.name).to.be.equal.to(data.name);
      });
    });
  } );
  describe('getRequest', function() {
    it('get with no id',function() {
      var get = datastore.get();
      get.then((data) => {
        expect(data).to.be.a(null);
      });
    });
    it('get with id',function() {
      var get = datastore.get(1);
      get.then((data1) => {
        data[TEST_ID]=1;
        expect(data1).to.be.equal.to(data);
      });
    });
    it('get with name',function() {
      var get = datastore.get('1');
      get.then((data1) => {
        data[TEST_ID]='1';
        expect(data1).to.be.equal.to(data);
      });
    });
    it('get with wrong id',function() {
      var get = datastore.get(2);
      get.then((data1) => {
        expect(data1).to.be.a(null);
      });
    });
    it('get with wrong name',function() {
      var get = datastore.get('2');
      get.then((data1) => {
        expect(data1).to.be.a(null);
      });
    });
  } );
  describe('getAllRequest', function() {
    it('getAll with no ids',function() {
      var get = datastore.getAll();
      get.then((data) => {
        expect(data).to.be.an('array').that.is.empty;
      });
    });
    it('getAll with ids',function() {
      var array = [1,2];
      data[TEST_ID]=1;
      var get = datastore.getAll(array);
      get.then((data1) => {
        expect(data1).to.be.an('array').that.includes(data);
      });
    });
    it('getAll with names',function() {
      var array = ['1','2'];
      data[TEST_ID]='1';
      var get = datastore.get(array);
      get.then((data1) => {
        expect(data1).to.be.an('array').that.includes(data);
      });
    });
    it('getAll with names and ids',function() {
      var array = ['1',2];
      var get = datastore.get(array);
      data[TEST_ID]='1';
      get.then((data1) => {
        expect(data1).to.be.an('array').that.includes(data);
      });
    });
    it('getAll with names and ids',function() {
      var array = ['1',1];
      var get = datastore.get(array);
      get.then((data1) => {
        expect(data1).to.be.an('array');
        data[TEST_ID]='1';
        expect(data1[0]).to.be.equal.to(data);
        data[TEST_ID]=1;
        expect(data1[1]).to.be.equal.to(data);

      });
    });
  } );
  describe('deleteRequest', function() {
    it('delete with no id',function() {
      var get = datastore.delete();
      var errorObject;
      get
      .catch((error) => {
        errorObject = error;
      });
      expect(errorObject).to.be.an('object').to.have.a.property('error');
    });
    it('delete with id',function() {
      var get = datastore.delete(1);
      var errorObject;
      get
      .catch((error) => {
        errorObject = error;
        expect(errorObject).to.be.an('object').to.have.a.property('error');

      });
    });
    it('delete with name',function() {
      var get = datastore.delete('1');
      var errorObject;
      get
      .catch((error) => {
        errorObject = error;
        expect(errorObject).to.be.an('object').to.have.a.property('error');

      });
    });
    it('delete with wrong id',function() {
      var get = datastore.delete(2);
      var errorObject;
      get
      .catch((error) => {
        errorObject = error;
      });
      expect(errorObject).to.be.an('object').to.have.a.property('error');
    });
    it('delete with wrong name',function() {
      var get = datastore.delete('2');
      var errorObject;
      get
      .catch((error) => {
        errorObject = error;
      });
      expect(errorObject).to.be.an('object').to.have.a.property('error');
    });
  } );
} );
