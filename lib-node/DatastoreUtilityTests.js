const datastoreClient = require( './DatastoreUtility.js' );

var schema = {
  TEST_ID:     { type: 'INTEGER'       },
  COL_INT:     { type: 'INTEGER'       },
  COL_STR:     { type: 'STRING'        },
  COL_BOOL:    { type: 'BOOLEAN'       },
  COL_DATE:    { type: 'TIMESTAMP'     },
  COL_INT_ARR: { type: 'INTEGER_ARRAY' },
  COL_STR_ARR: { type: 'STRING_ARRAY'  }
};

var datastore = datastoreClient({ projectId:'devo-pratilipi', kind:'TEST', schema:schema });

var chai = require( 'chai' );
var expect = require( 'chai' ).expect;

describe( 'DatastoreUtility test cases.',function() {

  var data = { 'COL_STR':'pratilipi' };

  describe( 'saveRequest', function() {
    it( 'save with no id and no data', function() {
      var get = datastore.save();
      var errorObject;
      get.catch( ( error ) => {
        errorObject = error;
      });
      expect( errorObject ).to.be.an( 'object' ).to.have.a.property( 'error' );
    });
    it( 'save with id and no data', function() {
      var get = datastore.save( 1 );
      var errorObject;
      get.catch( ( error ) => {
        errorObject = error;
      });
      expect( errorObject ).to.be.an( 'object' ).to.have.a.property( 'error' );
    });
    it( 'save with name and no data', function() {
      var get = datastore.save( '1' );
      var errorObject;
      get.catch( ( error ) => {
        errorObject = error;
      });
      expect( errorObject ).to.be.an( 'object' ).to.have.a.property( 'error' );
    });
    it( 'save with no id and data', function() {
      var get = datastore.save( data );
      var errorObject;
      get.catch( ( error ) => {
        errorObject = error;
      });
      expect( errorObject ).to.be.an( 'object' ).to.have.a.property( 'error' );
    });
    it( 'save with null and data', function() {
      var get = datastore.save( null, data );
      get.then( ( res ) => {
        expect( res.TEST_ID ).to.be.a( 'number' );
        expect( res.COL_STR ).to.be.equal.to( data.COL_STR );
      });
    });
    it( 'save with id and data', function() {
      var get = datastore.save( 1, data );
      get.then( ( res ) => {
        data[ 'TEST_ID' ] = 1;
        expect( res ).to.be.equal.to( data );
      });
    });
    it( 'save with name and data', function() {
      var get = datastore.save( '1', data );
      get.then( ( res ) => {
        data[ 'TEST_ID' ] = '1';
        expect( res ).to.be.equal.to( data );
      });
    });
  } );

  describe( 'getRequest', function() {
    it( 'get with no id', function() {
      var get = datastore.get();
      get.then( ( res ) => {
        expect( res ).to.be.a( null );
      });
    });
    it( 'get with wrong id', function() {
      var get = datastore.get( 2 );
      get.then( ( res ) => {
        expect( res ).to.be.a( null );
      });
    });
    it( 'get with wrong name', function() {
      var get = datastore.get( '2' );
      get.then( ( res ) => {
        expect( res ).to.be.a( null );
      });
    });
    it( 'get with id', function() {
      var get = datastore.get( 1 );
      get.then( ( res ) => {
        data[ 'TEST_ID' ]= 1;
        expect( res ).to.be.equal.to( data );
      });
    });
    it( 'get with name', function() {
      var get = datastore.get( '1' );
      get.then( ( res ) => {
        data[ 'TEST_ID' ]= '1';
        expect( res ).to.be.equal.to( data );
      });
    });
  } );

  describe( 'getAllRequest', function() {
    it( 'getAll with no ids', function() {
      var get = datastore.getAll();
      get.then( ( res ) => {
        expect( res ).to.be.an( 'array').that.is.empty;
      });
    });
    it( 'getAll with ids', function() {
      var ids = [ 1, 2 ];
      data[ 'TEST_ID' ] = 1;
      var get = datastore.getAll( ids );
      get.then( ( res ) => {
        expect( res ).to.be.an( 'array' ).that.includes( data );
      });
    });
    it( 'getAll with names', function() {
      var ids = [ '1', '2' ];
      data[ 'TEST_ID' ] = '1';
      var get = datastore.get( ids );
      get.then( ( res ) => {
        expect( res ).to.be.an( 'array' ).that.includes( data );
      });
    });
    it( 'getAll with id and name', function() {
      var array = [ 1, '1' ];
      var get = datastore.get( ids );
      data[ 'TEST_ID' ] = 1;
      get.then( ( res ) => {
        expect( res ).to.be.an( 'array' );
        data[ 'TEST_ID' ] = 1;
        expect( res[0] ).to.be.equal.to( data );
        data[ 'TEST_ID' ] = 1;
        expect( res[1] ).to.be.equal.to( data );
      });
    });
  } );

  describe( 'deleteRequest', function() {
    it( 'delete with no id', function() {
      var get = datastore.delete();
      var errorObject;
      get.catch( ( error ) => {
        errorObject = error;
      });
      expect( errorObject ).to.be.an( 'object' ).to.have.a.property( 'error' );
    });
    it( 'delete with id', function() {
      var get = datastore.delete( 1 );
      var errorObject;
      get.catch( ( error ) => {
        errorObject = error;
        expect( errorObject ).to.be.an( 'object' ).to.have.a.property( 'error' );
      });
    });
    it( 'delete with name', function() {
      var get = datastore.delete( '1' );
      var errorObject;
      get.catch( ( error ) => {
        errorObject = error;
        expect( errorObject ).to.be.an( 'object' ).to.have.a.property( 'error' );

      });
    });
    it( 'delete with wrong id', function() {
      var get = datastore.delete( 2 );
      var errorObject;
      get.catch( ( error ) => {
        errorObject = error;
      });
      expect( errorObject ).to.be.an( 'object' ).to.have.a.property( 'error' );
    });
    it('delete with wrong name',function() {
      var get = datastore.delete( '2' );
      var errorObject;
      get.catch( ( error ) => {
        errorObject = error;
      });
      expect( errorObject ).to.be.an( 'object' ).to.have.a.property( 'error' );
    });
  } );

} );
