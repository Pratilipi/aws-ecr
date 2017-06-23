var schema = { structure   : {
  'ID'         : { 'type' : 'INTEGER'   , 'default' : 0     },
  'NAME'       : { 'type' : 'STRING'    , 'default' : null  },
  'DOB'        : { 'type' : 'DATE'      , 'default' : null  },
  'UPDATED_TS' : { 'type' : 'TIMESTAMP' , 'default' : null  },
  'IS_ALIVE'   : { 'type' : 'BOOLEAN'   , 'default' : false },
  'HEIGHT'     : { 'type' : 'FLOAT'     , 'default' : 0.0   }
},
primaryKey  : 'ID'};



var dbUtility = require( './DbUtility.js' ) ( {
  'projectId' : 'devo-pratilipi',
  'kind' : 'Test',
  'schema' : schema
} );


var chai = require( 'chai' );
var expect = require( 'chai' ).expect;

describe('dbUtility Tests',function() {
  this.timeout( 3000 );
  describe('insert', function() {
    it('with undefined',function() {
      return dbUtility.insert()
      .catch((error) => {
        expect(error).to.be.an('error');
      });
    });
    it('with blank object',function() {
      return dbUtility.insert({})
      .catch((error) => {
        expect(error).to.be.an('error');
      });
    });
    it('with no primary key',function() {
      return dbUtility.insert({"name":"micheal", "dob":"2000-01-01", "updated_ts":"2000-01-01 12:56:56", "is_alive": true, "height":5.9})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.NAME ).to.be.a( 'string' );
        expect( data.NAME ).to.be.deep.equal( 'micheal' );
        expect( data.DOB ).to.be.a( 'string' );
        expect( data.DOB ).to.be.deep.equal( '2000-01-01' );
        expect( data.UPDATED_TS ).to.be.a( 'string' );
        expect( data.UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( true );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 5.9 );
      });
    });
    it('with primary key',function() {
      return dbUtility.insert({"id":1234512345123451, "name":"micheal", "dob":"2000-01-01", "updated_ts":"2000-01-01 12:56:56", "is_alive": true, "height":5.9})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.ID ).to.be.deep.equal( 1234512345123451 );
        expect( data.NAME ).to.be.a( 'string' );
        expect( data.NAME ).to.be.deep.equal( 'micheal' );
        expect( data.DOB ).to.be.a( 'string' );
        expect( data.DOB ).to.be.deep.equal( '2000-01-01' );
        expect( data.UPDATED_TS ).to.be.a( 'string' );
        expect( data.UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( true );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 5.9 );
      });
    });
    it('with same primary key',function() {
      return dbUtility.insert({"id":1234512345123451, "name":"micheal", "dob":"2000-01-01", "updated_ts":"2000-01-01 12:56:56", "is_alive": true, "height":5.9})
      .catch((error) => {
        expect(error).to.be.an('error');
      });
    });
    it('with no primary key same data',function() {
      return dbUtility.insert({"name":"micheal", "dob":"2000-01-01", "updated_ts":"2000-01-01 12:56:56", "is_alive": true, "height":5.9})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.NAME ).to.be.a( 'string' );
        expect( data.NAME ).to.be.deep.equal( 'micheal' );
        expect( data.DOB ).to.be.a( 'string' );
        expect( data.DOB ).to.be.deep.equal( '2000-01-01' );
        expect( data.UPDATED_TS ).to.be.a( 'string' );
        expect( data.UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( true );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 5.9 );
      });
    });
    it('with no primary key and just name',function() {
      return dbUtility.insert({"name":"sarah"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.NAME ).to.be.a( 'string' );
        expect( data.NAME ).to.be.deep.equal( 'sarah' );
        expect( data.DOB ).to.be.a( 'null' );
        expect( data.DOB ).to.be.deep.equal( null );
        expect( data.UPDATED_TS ).to.be.a( 'null' );
        expect( data.UPDATED_TS ).to.be.deep.equal( null );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( false );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 0 );
      });
    });
    it('with no primary key and just dob',function() {
      return dbUtility.insert({"dob":"2000-01-01"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.NAME ).to.be.an( 'null' );
        expect( data.NAME ).to.be.deep.equal( null );
        expect( data.DOB ).to.be.a( 'string' );
        expect( data.DOB ).to.be.deep.equal( '2000-01-01' );
        expect( data.UPDATED_TS ).to.be.a( 'null' );
        expect( data.UPDATED_TS ).to.be.deep.equal( null );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( false );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 0 );
      });
    });
    it('with no primary key and just updated_ts',function() {
      return dbUtility.insert({"updated_ts":"2000-01-01 12:56:56"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.NAME ).to.be.an( 'null' );
        expect( data.NAME ).to.be.deep.equal( null );
        expect( data.DOB ).to.be.a( 'null' );
        expect( data.DOB ).to.be.deep.equal( null );
        expect( data.UPDATED_TS ).to.be.a( 'string' );
        expect( data.UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( false );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 0 );
      });
    });
    it('with no primary key and just is_alive',function() {
      return dbUtility.insert({"is_alive": true})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.NAME ).to.be.an( 'null' );
        expect( data.NAME ).to.be.deep.equal( null );
        expect( data.DOB ).to.be.a( 'null' );
        expect( data.DOB ).to.be.deep.equal( null );
        expect( data.UPDATED_TS ).to.be.a( 'null' );
        expect( data.UPDATED_TS ).to.be.deep.equal( null );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( true );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 0 );
      });
    });
    it('with no primary key and just height',function() {
      return dbUtility.insert({"height":5.9})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.NAME ).to.be.an( 'null' );
        expect( data.NAME ).to.be.deep.equal( null );
        expect( data.DOB ).to.be.a( 'null' );
        expect( data.DOB ).to.be.deep.equal( null );
        expect( data.UPDATED_TS ).to.be.a( 'null' );
        expect( data.UPDATED_TS ).to.be.deep.equal( null );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( false );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 5.9 );
      });
    });
    it('with primary key and just name',function() {
      return dbUtility.insert({"id":1234512345123452, "name":"sarah"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.ID ).to.be.deep.equal( 1234512345123452 );
        expect( data.NAME ).to.be.a( 'string' );
        expect( data.NAME ).to.be.deep.equal( 'sarah' );
        expect( data.DOB ).to.be.a( 'null' );
        expect( data.DOB ).to.be.deep.equal( null );
        expect( data.UPDATED_TS ).to.be.a( 'null' );
        expect( data.UPDATED_TS ).to.be.deep.equal( null );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( false );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 0 );
      });
    });
    it('with primary key and just dob',function() {
      return dbUtility.insert({"id":1234512345123453, "dob":"2000-01-01"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.ID ).to.be.deep.equal( 1234512345123453 );
        expect( data.NAME ).to.be.an( 'null' );
        expect( data.NAME ).to.be.deep.equal( null );
        expect( data.DOB ).to.be.a( 'string' );
        expect( data.DOB ).to.be.deep.equal( '2000-01-01' );
        expect( data.UPDATED_TS ).to.be.a( 'null' );
        expect( data.UPDATED_TS ).to.be.deep.equal( null );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( false );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 0 );
      });
    });
    it('with primary key and just updated_ts',function() {
      return dbUtility.insert({"id":1234512345123454, "updated_ts":"2000-01-01 12:56:56"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.ID ).to.be.deep.equal( 1234512345123454 );
        expect( data.NAME ).to.be.an( 'null' );
        expect( data.NAME ).to.be.deep.equal( null );
        expect( data.DOB ).to.be.a( 'null' );
        expect( data.DOB ).to.be.deep.equal( null );
        expect( data.UPDATED_TS ).to.be.a( 'string' );
        expect( data.UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( false );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 0 );
      });
    });
    it('with primary key and just is_alive',function() {
      return dbUtility.insert({"id":1234512345123455, "is_alive": true})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.ID ).to.be.deep.equal( 1234512345123455 );
        expect( data.NAME ).to.be.an( 'null' );
        expect( data.NAME ).to.be.deep.equal( null );
        expect( data.DOB ).to.be.a( 'null' );
        expect( data.DOB ).to.be.deep.equal( null );
        expect( data.UPDATED_TS ).to.be.a( 'null' );
        expect( data.UPDATED_TS ).to.be.deep.equal( null );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( true );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 0 );
      });
    });
    it('with primary key and just height',function() {
      return dbUtility.insert({"id":1234512345123456, "height":5.9})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.ID ).to.be.deep.equal( 1234512345123456 );
        expect( data.NAME ).to.be.an( 'null' );
        expect( data.NAME ).to.be.deep.equal( null );
        expect( data.DOB ).to.be.a( 'null' );
        expect( data.DOB ).to.be.deep.equal( null );
        expect( data.UPDATED_TS ).to.be.a( 'null' );
        expect( data.UPDATED_TS ).to.be.deep.equal( null );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( false );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 5.9 );
      });
    });
    it('with primary key and same data jumbled up',function() {
      return dbUtility.insert({"updated_ts":"2000-01-01 12:56:56", "name":"micheal", "height":5.9, "dob":"2000-01-01", "id":1234512345123457, "is_alive": true})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.ID ).to.be.deep.equal( 1234512345123457 );
        expect( data.NAME ).to.be.a( 'string' );
        expect( data.NAME ).to.be.deep.equal( 'micheal' );
        expect( data.DOB ).to.be.a( 'string' );
        expect( data.DOB ).to.be.deep.equal( '2000-01-01' );
        expect( data.UPDATED_TS ).to.be.a( 'string' );
        expect( data.UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( true );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 5.9 );
      });
    });
    it('with no primary key and same data in upper case',function() {
      return dbUtility.insert({"NAME":"micheal", "DOB":"2000-01-01", "UPDATED_TS":"2000-01-01 12:56:56", "IS_ALIVE": true, "HEIGHT":5.9})
      .then( ( data ) => {
        expect( data ).to.be.an( 'object' ).to.have.property('ID');
        expect( data ).to.be.an( 'object' ).to.have.property('NAME');
        expect( data ).to.be.an( 'object' ).to.have.property('DOB');
        expect( data ).to.be.an( 'object' ).to.have.property('UPDATED_TS');
        expect( data ).to.be.an( 'object' ).to.have.property('IS_ALIVE');
        expect( data ).to.be.an( 'object' ).to.have.property('HEIGHT');
        expect( data.ID ).to.be.a( 'number' );
        expect( data.NAME ).to.be.a( 'string' );
        expect( data.NAME ).to.be.deep.equal( 'micheal' );
        expect( data.DOB ).to.be.a( 'string' );
        expect( data.DOB ).to.be.deep.equal( '2000-01-01' );
        expect( data.UPDATED_TS ).to.be.a( 'string' );
        expect( data.UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
        expect( data.IS_ALIVE ).to.be.a( 'boolean' );
        expect( data.IS_ALIVE ).to.be.deep.equal( true );
        expect( data.HEIGHT ).to.be.a( 'number' );
        expect( data.HEIGHT ).to.be.deep.equal( 5.9 );
      });
    });
    it('with no primary key and data not conforming to schema',function() {
      return dbUtility.insert({"abba":"dabba", "jaaba":"oppa"})
      .catch((error) => {
        expect(error).to.be.an('error');
      });
    });
    it('with primary key and data not conforming to schema',function() {
      return dbUtility.insert({"id":1234512345123452, "name":"sarah", "abba":"dabba"})
      .catch((error) => {
        expect(error).to.be.an('error');
      });
    });
  } );
  describe('query', function() {
    it('with undefined',function() {
      return dbUtility.query()
      .catch((error) => {
        expect(error).to.be.an('error');
      });
    });
    it('with blank object',function() {
      return dbUtility.query({})
      .catch((error) => {
        expect(error).to.be.an('error');
      });
    });
    it('with primary key',function() {
      return dbUtility.query({"id":1234512345123451})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 1 );
        expect( data[ 0 ].ID ).to.be.a( 'number' );
        expect( data[ 0 ].ID ).to.be.deep.equal( 1234512345123451 );
      });
    });
    it('with duplicate id',function() {
      return dbUtility.query({"id":1234512345123451, "id":1234512345123451})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 1 );
        expect( data[ 0 ].ID ).to.be.a( 'number' );
        expect( data[ 0 ].ID ).to.be.deep.equal( 1234512345123451 );
      });
    });
    it('with name and wrong dob',function() {
      return dbUtility.query({"name":"micheal", "dob":"200-01-01"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data[ 0 ] ).to.be.a( 'null' );
        expect( data[ 0 ] ).to.be.deep.equal( null );

      });
    });
    it('with wrong key name',function() {
      return dbUtility.query({"abba":"dabba", "jaaba":"200-01-01"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data[ 0 ] ).to.be.a( 'null' );
        expect( data[ 0 ] ).to.be.deep.equal( null );
      });
    });
    it('with duplicate name and duplicate dob where last keys are wrong',function() {
      return dbUtility.query({"name":"micheal", "dob":"2000-01-01", "name":"micheal", "dob":"200-01-01"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data[ 0 ] ).to.be.a( 'null' );
        expect( data[ 0 ] ).to.be.deep.equal( null );
      });
    });
    it('with uppercase name and uppercase dob',function() {
      return dbUtility.query({"NAME":"micheal", "DOB":"2000-01-01"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ].ID ).to.be.a( 'number' );
          expect( data[ i ].NAME ).to.be.a( 'string' );
          expect( data[ i ].NAME ).to.be.deep.equal( 'micheal' );
          expect( data[ i ].DOB ).to.be.a( 'string' );
          expect( data[ i ].DOB ).to.be.deep.equal( '2000-01-01' );
        }
      });
    });
    it('with name, dob, updated_ts, is_alive, height',function() {
      return dbUtility.query({"name":"micheal", "dob":"2000-01-01", "updated_ts":"2000-01-01 12:56:56", "is_alive": true, "height":5.9})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ].ID ).to.be.a( 'number' );
          expect( data[ i ].NAME ).to.be.a( 'string' );
          expect( data[ i ].NAME ).to.be.deep.equal( 'micheal' );
          expect( data[ i ].DOB ).to.be.a( 'string' );
          expect( data[ i ].DOB ).to.be.deep.equal( '2000-01-01' );
          expect( data[ i ].UPDATED_TS ).to.be.a( 'string' );
          expect( data[ i ].UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
          expect( data[ i ].IS_ALIVE ).to.be.a( 'boolean' );
          expect( data[ i ].IS_ALIVE ).to.be.deep.equal( true );
          expect( data[ i ].HEIGHT ).to.be.a( 'number' );
          expect( data[ i ].HEIGHT ).to.be.deep.equal( 5.9 );
        }
      });
    });
    it('with id, name, dob, updated_ts, is_alive, height',function() {
      return dbUtility.query({"id":1234512345123451, "name":"micheal", "dob":"2000-01-01", "updated_ts":"2000-01-01 12:56:56", "is_alive": true, "height":5.9})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 1 );
        expect( data[ 0 ].ID ).to.be.a( 'number' );
        expect( data[ 0 ].ID ).to.be.deep.equal( 1234512345123451 );
        expect( data[ 0 ].NAME ).to.be.a( 'string' );
        expect( data[ 0 ].NAME ).to.be.deep.equal( 'micheal' );
        expect( data[ 0 ].DOB ).to.be.a( 'string' );
        expect( data[ 0 ].DOB ).to.be.deep.equal( '2000-01-01' );
        expect( data[ 0 ].UPDATED_TS ).to.be.a( 'string' );
        expect( data[ 0 ].UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
        expect( data[ 0 ].IS_ALIVE ).to.be.a( 'boolean' );
        expect( data[ 0 ].IS_ALIVE ).to.be.deep.equal( true );
        expect( data[ 0 ].HEIGHT ).to.be.a( 'number' );
        expect( data[ 0 ].HEIGHT ).to.be.deep.equal( 5.9 );
      });
    });
    it('with name',function() {
      return dbUtility.query({"name":"sarah"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ].ID ).to.be.a( 'number' );
          expect( data[ i ].NAME ).to.be.a( 'string' );
          expect( data[ i ].NAME ).to.be.deep.equal( 'sarah' );
        }
      });
    });
    it('with dob',function() {
      return dbUtility.query({"dob":"2000-01-01"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ].ID ).to.be.a( 'number' );
          expect( data[ i ].DOB ).to.be.a( 'string' );
          expect( data[ i ].DOB ).to.be.deep.equal( '2000-01-01' );
        }
      });
    });
    it('with updated_ts',function() {
      return dbUtility.query({"updated_ts":"2000-01-01 12:56:56"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ].ID ).to.be.a( 'number' );
          expect( data[ i ].UPDATED_TS ).to.be.a( 'string' );
          expect( data[ i ].UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
        }
      });
    });
    it('with is_alive',function() {
      return dbUtility.query({"is_alive": true})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ].ID ).to.be.a( 'number' );
          expect( data[ i ].IS_ALIVE ).to.be.a( 'boolean' );
          expect( data[ i ].IS_ALIVE ).to.be.deep.equal( true );
        }
      });
    });
    it('with height',function() {
      return dbUtility.query({"height":5.9})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ].ID ).to.be.a( 'number' );
          expect( data[ i ].HEIGHT ).to.be.a( 'number' );
          expect( data[ i ].HEIGHT ).to.be.deep.equal( 5.9 );
        }
      });
    });
    it('with id and name',function() {
      return dbUtility.query({"id":1234512345123452, "name":"sarah"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 1 );
        expect( data[ 0 ].ID ).to.be.a( 'number' );
        expect( data[ 0 ].ID ).to.be.deep.equal( 1234512345123452 );
        expect( data[ 0 ].NAME ).to.be.a( 'string' );
        expect( data[ 0 ].NAME ).to.be.deep.equal( 'sarah' );

      });
    });
    it('with id and dob',function() {
      return dbUtility.query({"id":1234512345123453, "dob":"2000-01-01"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 1 );
        expect( data[ 0 ].ID ).to.be.a( 'number' );
        expect( data[ 0 ].ID ).to.be.deep.equal( 1234512345123453 );
        expect( data[ 0 ].DOB ).to.be.a( 'string' );
        expect( data[ 0 ].DOB ).to.be.deep.equal( '2000-01-01' );

      });
    });
    it('with id and updated_ts',function() {
      return dbUtility.query({"id":1234512345123454, "updated_ts":"2000-01-01 12:56:56"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 1 );
        expect( data[ 0 ].ID ).to.be.a( 'number' );
        expect( data[ 0 ].ID ).to.be.deep.equal( 1234512345123454 );
        expect( data[ 0 ].UPDATED_TS ).to.be.a( 'string' );
        expect( data[ 0 ].UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );

      });
    });
    it('with id and is_alive',function() {
      return dbUtility.query({"id":1234512345123455, "is_alive": true})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 1 );
        expect( data[ 0 ].ID ).to.be.a( 'number' );
        expect( data[ 0 ].ID ).to.be.deep.equal( 1234512345123455 );
        expect( data[ 0 ].IS_ALIVE ).to.be.a( 'boolean' );
        expect( data[ 0 ].IS_ALIVE ).to.be.deep.equal( true );

      });
    });
    it('with id and height',function() {
      return dbUtility.query({"id":1234512345123456, "height":5.9})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 1 );
        expect( data[ 0 ].ID ).to.be.a( 'number' );
        expect( data[ 0 ].ID ).to.be.deep.equal( 1234512345123456 );
        expect( data[ 0 ].HEIGHT ).to.be.a( 'number' );
        expect( data[ 0 ].HEIGHT ).to.be.deep.equal( 5.9 );
      });
    });
    it('with keys jumbled up',function() {
      return dbUtility.query({"updated_ts":"2000-01-01 12:56:56", "name":"micheal", "height":5.9, "dob":"2000-01-01", "id":1234512345123457, "is_alive": true})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 1 );
        expect( data[ 0 ].ID ).to.be.a( 'number' );
        expect( data[ 0 ].ID ).to.be.deep.equal( 1234512345123457 );
        expect( data[ 0 ].NAME ).to.be.a( 'string' );
        expect( data[ 0 ].NAME ).to.be.deep.equal( 'micheal' );
        expect( data[ 0 ].DOB ).to.be.a( 'string' );
        expect( data[ 0 ].DOB ).to.be.deep.equal( '2000-01-01' );
        expect( data[ 0 ].UPDATED_TS ).to.be.a( 'string' );
        expect( data[ 0 ].UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
        expect( data[ 0 ].IS_ALIVE ).to.be.a( 'boolean' );
        expect( data[ 0 ].IS_ALIVE ).to.be.deep.equal( true );
        expect( data[ 0 ].HEIGHT ).to.be.a( 'number' );
        expect( data[ 0 ].HEIGHT ).to.be.deep.equal( 5.9 );
      });
    });
    it('with no id and uppercase keys',function() {
      return dbUtility.query({"NAME":"micheal", "DOB":"2000-01-01", "UPDATED_TS":"2000-01-01 12:56:56", "IS_ALIVE": true, "HEIGHT":5.9})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ].ID ).to.be.a( 'number' );
          expect( data[ i ].NAME ).to.be.a( 'string' );
          expect( data[ i ].NAME ).to.be.deep.equal( 'micheal' );
          expect( data[ i ].DOB ).to.be.a( 'string' );
          expect( data[ i ].DOB ).to.be.deep.equal( '2000-01-01' );
          expect( data[ i ].UPDATED_TS ).to.be.a( 'string' );
          expect( data[ i ].UPDATED_TS ).to.be.deep.equal( '2000-01-01 12:56:56' );
          expect( data[ i ].IS_ALIVE ).to.be.a( 'boolean' );
          expect( data[ i ].IS_ALIVE ).to.be.deep.equal( true );
          expect( data[ i ].HEIGHT ).to.be.a( 'number' );
          expect( data[ i ].HEIGHT ).to.be.deep.equal( 5.9 );
        }
      });
    });
    it('with wrong keys',function() {
      return dbUtility.query({"abba":"dabba", "jaaba":"oppa"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data[ 0 ] ).to.be.a( 'null' );
        expect( data[ 0 ] ).to.be.deep.equal( null );
      });
    });
    it('with uppercase keys and wrong keys',function() {
      return dbUtility.query({"NAME":"micheal", "DOB":"2000-01-01", "UPDATED_TS":"2000-01-01 12:56:56", "IS_ALIVE": true, "HEIGHT":5.9, "abba":"dabba", "jaaba":"oppa"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data[ 0 ] ).to.be.a( 'null' );
        expect( data[ 0 ] ).to.be.deep.equal( null );
      });
    });
    it('with duplicate name',function() {
      return dbUtility.query({"name":"sarah", "name":"micheal"})
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ].ID ).to.be.a( 'number' );
          expect( data[ i ].NAME ).to.be.a( 'string' );
          expect( data[ i ].NAME ).to.be.deep.equal( 'micheal' );
        }
      });
    });
  } );
  describe('list', function() {
    it('with undefined',function() {
      return dbUtility.list()
      .catch((error) => {
        expect(error).to.be.an('error');
      });
    });
    it('with blank object',function() {
      return dbUtility.list([])
      .catch((error) => {
        expect(error).to.be.an('error');
      });
    });
    it('with single primary key',function() {
      return dbUtility.list([1234512345123451])
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 1 );
        expect( data[ 0 ].ID ).to.be.a( 'number' );
        expect( data[ 0 ].ID ).to.be.deep.equal( 1234512345123451 );
      });
    });
    it('with multiple primary key',function() {
      return dbUtility.list([1234512345123451, 1234512345123452, 1234512345123453, 1234512345123454])
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 4 );
        expect( data[ 0 ].ID ).to.be.a( 'number' );
        expect( data[ 0 ].ID ).to.be.deep.equal( 1234512345123451 );
        expect( data[ 1 ].ID ).to.be.a( 'number' );
        expect( data[ 1 ].ID ).to.be.deep.equal( 1234512345123452 );
        expect( data[ 2 ].ID ).to.be.a( 'number' );
        expect( data[ 2 ].ID ).to.be.deep.equal( 1234512345123453 );
        expect( data[ 3 ].ID ).to.be.a( 'number' );
        expect( data[ 3 ].ID ).to.be.deep.equal( 1234512345123454 );
      });
    });
    it('with duplicate primary key',function() {
      return dbUtility.list([1234512345123451, 1234512345123451])
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 2 );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ].ID ).to.be.a( 'number' );
          expect( data[ i ].ID ).to.be.deep.equal( 1234512345123451 );
        }
      });
    });
    it('with multiple same primary key',function() {
      return dbUtility.list([1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, 1234512345123451, ])
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 20 );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ].ID ).to.be.a( 'number' );
          expect( data[ i ].ID ).to.be.deep.equal( 1234512345123451 );
        }
      });
    });
    it('with wrong primary key number',function() {
      return dbUtility.list([-1234512345123451, -0.0])
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 2 );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ] ).to.be.a( 'null' );
          expect( data[ i ] ).to.be.deep.equal( null );
        }
      });
    });
    it('with wrong primary key string',function() {
      return dbUtility.list(["micheal", "200-01-01", "hello", "abba", "dabba"])
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 5 );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ] ).to.be.a( 'null' );
          expect( data[ i ] ).to.be.deep.equal( null );
        }
      });
    });
    it('with wrong primary key but same field',function() {
      return dbUtility.list(["2001-01-01", "2000-01-01", "2010-01-01"])
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 3 );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ] ).to.be.a( 'null' );
          expect( data[ i ] ).to.be.deep.equal( null );
        }
      });
    });
    it('with wrong primary key but different types',function() {
      return dbUtility.list(["2001-01-01", 1234, true])
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 3 );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ] ).to.be.a( 'null' );
          expect( data[ i ] ).to.be.deep.equal( null );
        }
      });
    });
    it('with same wrong primary key',function() {
      return dbUtility.list([0,0,0,0])
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 4 );
        for( var i = 0; i < data.length; i++ ) {
          expect( data[ i ] ).to.be.a( 'null' );
          expect( data[ i ] ).to.be.deep.equal( null );
        }
      });
    });
    it('with duplicate primary key and duplicate wrong key in specific order',function() {
      return dbUtility.list([0,1234512345123451,1234512345123451,0])
      .then( ( data ) => {
        expect( data ).to.be.an( 'array' );
        expect( data.length ).to.be.deep.equal( 4 );
        expect( data[ 0 ] ).to.be.a( 'null' );
        expect( data[ 0 ] ).to.be.deep.equal( null );
        expect( data[ 1 ].ID ).to.be.a( 'number' );
        expect( data[ 1 ].ID ).to.be.deep.equal( 1234512345123451 );
        expect( data[ 2 ].ID ).to.be.a( 'number' );
        expect( data[ 2 ].ID ).to.be.deep.equal( 1234512345123451 );
        expect( data[ 3 ] ).to.be.a( 'null' );
        expect( data[ 3 ] ).to.be.deep.equal( null );
      });
    });
  } );
  describe('delete', function() {
    it('with undefined',function() {
      return dbUtility.delete()
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with blank object',function() {
      return dbUtility.delete({})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with wrong type',function() {
      return dbUtility.delete(0)
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with wrong primary key',function() {
      return dbUtility.delete({"id":100})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with primary key',function() {
      return dbUtility.delete({"id":1234512345123451})
      .then( ( data ) => {
        console.log(data);
        expect(data).to.be.a('number');
        expect(data).to.be.deep.equal(1);
      } );
    });
    it('with primary key as string enclosed',function() {
      return dbUtility.delete({"id":"1234512345123452"})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with just primary key',function() {
      return dbUtility.delete(1234512345123451)
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with another keyname',function() {
      return dbUtility.delete({"name":"micheal"})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with primary key string',function() {
      return dbUtility.delete({"id":"2018-01-01"})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with primary key negative number',function() {
      return dbUtility.delete({"id":-100})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with primary key float number',function() {
      return dbUtility.delete({"id":100.12})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with primary key negative float number',function() {
      return dbUtility.delete({"id":-100.12})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with primary key boolean',function() {
      return dbUtility.delete({"id":true})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with wrong keyname',function() {
      return dbUtility.delete({"abba":"dabba"})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with wrong and correct key name',function() {
      return dbUtility.delete({"abba":"dabba", "id":1234512345123451})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with extra fieldname and primary key',function() {
      return dbUtility.delete({"name":"micheal", "id":1234512345123451})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with uppercase id and uppercase extra fieldname',function() {
      return dbUtility.delete({"NAME":"micheal", "ID":1234512345123451})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
    it('with uppercase extra fieldname and id',function() {
      return dbUtility.delete({"NAME":"micheal", "id":1234512345123451})
      .catch((error) => {
        console.log(error);
        expect(error).to.be.an('error');
      });
    });
  } );
} );
