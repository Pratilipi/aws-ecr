var schema1 = { structure   : {
  'TEST1_ID'    : { 'type' : 'INTEGER'   , 'default' : 0     },
  'INTEGER' : { 'type' : 'INTEGER'   , 'default' : 0     },
  'INTEGER_WITH_NULL' : { 'type' : 'INTEGER'   , 'default' : null     },
  'INTEGER_WITH_ZERO' : { 'type' : 'INTEGER'   , 'default' : 0     },
  'FLOAT' : { 'type' : 'FLOAT'   , 'default' : 0.0     },
  'FLOAT_WITH_NULL' : { 'type' : 'FLOAT'   , 'default' : null     },
  'FLOAT_WITH_ZERO_INT' : { 'type' : 'FLOAT'   , 'default' : 0     },
  'FLOAT_WITH_ZERO_FLOAT' : { 'type' : 'FLOAT'   , 'default' : 0.0     },
  'BOOLEAN': { 'type' : 'BOOLEAN'   , 'default' : false },
  'BOOLEAN_WITH_NULL': { 'type' : 'BOOLEAN'   , 'default' : null },
  'BOOLEAN_WITH_FALSE': { 'type' : 'BOOLEAN'   , 'default' : false },
  'ARRAY': { 'type' : 'ARRAY'   , 'default' : [] },
  'ARRAY_WITH_NULL': { 'type' : 'ARRAY'   , 'default' : null },
  'ARRAY_WITH_ARRAY': { 'type' : 'ARRAY'   , 'default' : [] },
  'STRING'       : { 'type' : 'STRING'    , 'default' : ""  },
  'STRING_WITH_BLANK'       : { 'type' : 'STRING'    , 'default' : ""  },
  'STRING_WITH_NULL'       : { 'type' : 'STRING'    , 'default' : null  },
  'TIMESTAMP'        : { 'type' : 'TIMESTAMP' , 'default' : 'new Date()'  },
  'TIMESTAMP_WITH_NULL'        : { 'type' : 'TIMESTAMP' , 'default' : null  },
  'TIMESTAMP_WITH_NEW_DATE' : { 'type' : 'TIMESTAMP' , 'default' : new Date()  },
  'TIMESTAMP_WITH_STRING' : { 'type' : 'TIMESTAMP' , 'default' : 'new Date()'  },
  'GEOPOINT': { 'type' : 'GEOPOINT' , 'default' : {latitude:0,longitude:0}  },
  'GEOPOINT_WITH_NULL': { 'type' : 'GEOPOINT' , 'default' : null  },
  'GEOPOINT_WITH_OBJECT': { 'type' : 'GEOPOINT' , 'default' : {latitude:0,longitude:0}  },
  'NULL': { 'type' : 'NULL' , 'default' : null  },
  'OBJECT'   : { 'type' : 'OBJECT'   , 'default' : {} },
  'OBJECT_WITH_NULL'   : { 'type' : 'OBJECT'   , 'default' : null },
  'OBJECT_WITH_OBJECT'     : { 'type' : 'OBJECT'     , 'default' : {}   }
},
primaryKey  : 'TEST1_ID',
excludeFromIndexes: ['STRING','INTEGER']};

var schema2 = { structure   : {
  'TEST2_ID'    : { 'type' : 'STRING'   , 'default' : ""     },
  'INTEGER' : { 'type' : 'INTEGER'   , 'default' : 0     },
  'INTEGER_WITH_NULL' : { 'type' : 'INTEGER'   , 'default' : null     },
  'INTEGER_WITH_ZERO' : { 'type' : 'INTEGER'   , 'default' : 0     },
  'FLOAT' : { 'type' : 'FLOAT'   , 'default' : 0.0     },
  'FLOAT_WITH_NULL' : { 'type' : 'FLOAT'   , 'default' : null     },
  'FLOAT_WITH_ZERO_INT' : { 'type' : 'FLOAT'   , 'default' : 0     },
  'FLOAT_WITH_ZERO_FLOAT' : { 'type' : 'FLOAT'   , 'default' : 0.0     },
  'BOOLEAN': { 'type' : 'BOOLEAN'   , 'default' : false },
  'BOOLEAN_WITH_NULL': { 'type' : 'BOOLEAN'   , 'default' : null },
  'BOOLEAN_WITH_FALSE': { 'type' : 'BOOLEAN'   , 'default' : false },
  'ARRAY': { 'type' : 'ARRAY'   , 'default' : [] },
  'ARRAY_WITH_NULL': { 'type' : 'ARRAY'   , 'default' : null },
  'ARRAY_WITH_ARRAY': { 'type' : 'ARRAY'   , 'default' : [] },
  'STRING'       : { 'type' : 'STRING'    , 'default' : ""  },
  'STRING_WITH_BLANK'       : { 'type' : 'STRING'    , 'default' : ""  },
  'STRING_WITH_NULL'       : { 'type' : 'STRING'    , 'default' : null  },
  'TIMESTAMP'        : { 'type' : 'TIMESTAMP' , 'default' : 'new Date()'  },
  'TIMESTAMP_WITH_NULL'        : { 'type' : 'TIMESTAMP' , 'default' : null  },
  'TIMESTAMP_WITH_NEW_DATE' : { 'type' : 'TIMESTAMP' , 'default' : new Date()  },
  'TIMESTAMP_WITH_STRING' : { 'type' : 'TIMESTAMP' , 'default' : 'new Date()'  },
  'GEOPOINT': { 'type' : 'GEOPOINT' , 'default' : {latitude:0,longitude:0}  },
  'GEOPOINT_WITH_NULL': { 'type' : 'GEOPOINT' , 'default' : null  },
  'GEOPOINT_WITH_OBJECT': { 'type' : 'GEOPOINT' , 'default' : {latitude:0,longitude:0}  },
  'NULL': { 'type' : 'NULL' , 'default' : null  },
  'OBJECT'   : { 'type' : 'OBJECT'   , 'default' : {} },
  'OBJECT_WITH_NULL'   : { 'type' : 'OBJECT'   , 'default' : null },
  'OBJECT_WITH_OBJECT'     : { 'type' : 'OBJECT'     , 'default' : {}   }
},
primaryKey  : 'TEST2_ID'};


var dbUtility1 = require( './DbUtility.js' ) ( {
  'projectId' : 'devo-pratilipi',
  'kind' : 'TEST1',
  'schema' : schema1
} );

var dbUtility2 = require( './DbUtility.js' ) ( {
  'projectId' : 'devo-pratilipi',
  'kind' : 'TEST2',
  'schema' : schema2
} );


var chai = require( 'chai' );
var expect = require( 'chai' ).expect;

var generateNewKey = function() {
  return new Date().getTime();
};

var typeConversion = {
  INTEGER : 'number',
  FLOAT : 'number',
  BOOLEAN : 'boolean',
  ARRAY : 'array',
  STRING : 'string',
  TIMESTAMP : 'date',
  GEOPOINT : 'object',
  NULL : 'null',
  OBJECT : 'object'
};

describe( 'DbUtility Tests', function() {

  this.timeout( 15000 );

  describe( 'dbUtility1 Tests', function() {
    var withPrimaryKey = {
    [ schema1.primaryKey ] : generateNewKey(),
    'INTEGER' : 2,
    'FLOAT' : 23.5,
    'BOOLEAN' : true,
    'ARRAY' : [ 123, 456 ],
    'STRING' : 'test1',
    'TIMESTAMP' : new Date(),
    'GEOPOINT' : { latitude: 12.1234, longitude: 34.5678 },
    'OBJECT' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() }
    };
    var withoutPrimaryKey = {
    'INTEGER' : 2,
    'FLOAT' : 23.5,
    'BOOLEAN' : true,
    'ARRAY' : [ 123, 456 ],
    'STRING' : 'test1',
    'TIMESTAMP' : new Date(),
    'GEOPOINT' : { latitude: 12.1234, longitude: 34.5678 },
    'OBJECT' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() }
    };

    var structureKeys = Object.keys( schema1.structure );

    // INSERT
    describe( 'insert', function() {
      var testId;
      afterEach( function() {
        if( testId != null ) {
          return dbUtility1.delete( { [ schema1.primaryKey ]: testId } )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        }
      } );
      it( 'with undefined', function() {
        return dbUtility1.insert()
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          testId = null;
        } );
      } );
      it( 'with blank object', function() {
        return dbUtility1.insert( {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          testId = null;
        } );
      } );
      it( 'with no primary key', function() {
        return dbUtility1.insert( withoutPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withoutPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withoutPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it('with primary key',function() {
        return dbUtility1.insert( withPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with same primary key', function() {
        return dbUtility1.insert( withPrimaryKey )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          testId = null;
        } );
      } );
      it( 'with no primary key same data', function() {
        return dbUtility1.insert( withoutPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withoutPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withoutPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just STRING', function() {
        var testData = { "STRING": "test2" };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just TIMESTAMP', function() {
        var testData = { "TIMESTAMP": new Date( 0 ) };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just INTEGER', function() {
        var testData = { "INTEGER": 987 };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just FLOAT', function() {
        var testData = { "FLOAT": 987.654 };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just GEOPOINT', function() {
        var testData = { "GEOPOINT": { latitude:18.76, longitude: -18.76 } };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just OBJECT', function() {
        var testData = { "OBJECT": { "test":"teststring", "test2": 123 } };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just ARRAY', function() {
        var testData = { "ARRAY": [ 123, 456, "qwerty" ] };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just NULL', function() {
        var testData = { "NULL": null };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
              
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just BOOLEAN', function() {
        var testData = { "BOOLEAN": true };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
              
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just string', function() {
        var testData = { "string": "test2" };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just timestamp', function() {
        var testData = { "timestamp": new Date( 0 ) };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just integer', function() {
        var testData = { "integer": 987 };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just float', function() {
        var testData = { "float": 987.654 };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just geopoint', function() {
        var testData = { "geopoint": { latitude:18.76, longitude: -18.76 } };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just object', function() {
        var testData = { "object": { "test":"teststring", "test2": 123 } };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just array', function() {
        var testData = { "array": [ 123, 456, "qwerty" ] };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just null', function() {
        var testData = { "null": null };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and just boolean', function() {
        var testData = { "boolean": true };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just STRING', function() {
        var testData = { [ schema1.primaryKey ]: generateNewKey(), "STRING": "test2" };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just TIMESTAMP', function() {
        var testData = { [ schema1.primaryKey ]: generateNewKey(), "TIMESTAMP": new Date( 0 ) };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just INTEGER', function() {
        var testData = { [ schema1.primaryKey ]: generateNewKey(), "INTEGER": 987 };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just FLOAT', function() {
        var testData = { [ schema1.primaryKey ]: generateNewKey(), "FLOAT": 987.654 };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just GEOPOINT', function() {
        var testData = { [ schema1.primaryKey ]: generateNewKey(), "GEOPOINT": { latitude:18.76, longitude: -18.76 } };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just OBJECT', function() {
        var testData = { [ schema1.primaryKey ]: generateNewKey(), "OBJECT": { "test":"teststring", "test2": 123 } };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just ARRAY', function() {
        var testData = { [ schema1.primaryKey ]: generateNewKey(), "ARRAY": [ 123, 456, "qwerty" ] };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just NULL', function() {
        var testData = { [ schema1.primaryKey ]: generateNewKey(), "NULL": null };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just BOOLEAN', function() {
        var testData = { [ schema1.primaryKey ]: generateNewKey(), "BOOLEAN": true };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just string', function() {
        var testData = { [ schema1.primaryKey.toLowerCase() ]: generateNewKey(), "string": "test2" };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just timestamp', function() {
        var testData = { [ schema1.primaryKey.toLowerCase() ]: generateNewKey(), "timestamp": new Date( 0 ) };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just integer', function() {
        var testData = { [ schema1.primaryKey.toLowerCase() ]: generateNewKey(), "integer": 987 };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just float', function() {
        var testData = { [ schema1.primaryKey.toLowerCase() ]: generateNewKey(), "float": 987.654 };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just geopoint', function() {
        var testData = { [ schema1.primaryKey.toLowerCase() ]: generateNewKey(), "geopoint": { latitude:18.76, longitude: -18.76 } };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just object', function() {
        var testData = { [ schema1.primaryKey.toLowerCase() ]: generateNewKey(), "object": { "test":"teststring", "test2": 123 } };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just array', function() {
        var testData = { [ schema1.primaryKey.toLowerCase() ]: generateNewKey(), "array": [ 123, 456, "qwerty" ] };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just null', function() {
        var testData = { [ schema1.primaryKey.toLowerCase() ]: generateNewKey(), "null": null };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and just boolean', function() {
        var testData = { [ schema1.primaryKey.toLowerCase() ]: generateNewKey(), "boolean": true };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and same small data jumbled up lowercase', function() {        
        var testData = {
        'geopoint' : { latitude: 12.1234, longitude: 34.5678 },
        'integer' : 2,
        'float' : 23.5,
        'string' : 'test1',
        'timestamp' : new Date(),
        'array' : [ 123, 456 ],
        'boolean' : true,
        'object' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() }
        };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and same data jumbled up lowercase', function() {
        var testData = {
        'float' : 23.5,
        'boolean' : true,
        'integer' : 2,
        'geopoint' : { latitude: 12.1234, longitude: 34.5678 },
        'array' : [ 123, 456 ],
        'object' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() },
        [ schema1.primaryKey.toLowerCase() ]: generateNewKey(),
        'string' : 'test1',
        'timestamp' : new Date()
        };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and same data jumbled up', function() {        
        var testData = {
        'GEOPOINT' : { latitude: 12.1234, longitude: 34.5678 },
        'INTEGER' : 2,
        'FLOAT' : 23.5,
        'STRING' : 'test1',
        'TIMESTAMP' : new Date(),
        'ARRAY' : [ 123, 456 ],
        'BOOLEAN' : true,
        'OBJECT' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() }
        };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with primary key and same data jumbled up', function() {
        var testData = {
        'FLOAT' : 23.5,
        'BOOLEAN' : true,
        'INTEGER' : 2,
        'GEOPOINT' : { latitude: 12.1234, longitude: 34.5678 },
        'ARRAY' : [ 123, 456 ],
        'OBJECT' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() },
        [ schema1.primaryKey ]: generateNewKey(),
        'STRING' : 'test1',
        'TIMESTAMP' : new Date()
        };
        return dbUtility1.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema1.primaryKey ];
        } );
      } );
      it( 'with no primary key and data not conforming to schema', function() {
        return dbUtility1.insert( { "abba":"dabba", "jaaba":"oppa" } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          testId = null;
        } );
      } );
      it( 'with primary key and data not conforming to schema', function() {
        return dbUtility1.insert( { [ schema1.primaryKey.toLowerCase() ]: generateNewKey(), "name":"sarah", "abba":"dabba" } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          testId = null;
        } );
      } );
    } );

    // QUERY
    // describe( 'query', function() {
    //   var testData=[];
    //   var testId=[];
    //   beforeEach( function() {
    //     testId = [];
    //     testData = [];
    //     return new Promise( function( resolve, reject ) {
    //       var insertMultiple = [];
    //       for( var i = 0; i < 10; i++ ) {
    //         insertMultiple.push(
    //           dbUtility1.insert( withoutPrimaryKey )
    //           .then( function( data ) {
    //             expect( data ).to.be.an( 'object' );
    //             expect( data ).to.have.deep.property( schema1.primaryKey );
    //             // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
    //             expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
    //             expect( data ).to.have.deep.property( 'TIMESTAMP' );
    //             expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
    //             expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
    //             expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
    //             for( var i = 0; i < structureKeys.length; i++ ) {
    //               if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
    //                 continue;
    //               }
    //               if( withoutPrimaryKey[ structureKeys[ i ] ] === undefined ) {
    //                 expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
    //               } else {
    //                 expect( data ).to.have.deep.property( structureKeys[i], withoutPrimaryKey[ structureKeys[ i ] ] );
    //               }
    //               if ( data[ structureKeys[ i ] ] === null ) {
    //                 expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
    //               } else {
    //                 expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
    //               }
    //             }
    //             testData[ data[ schema1.primaryKey ] ] = data;
    //             testId.push( data[ schema1.primaryKey ] );
    //             return data;
    //           } )
    //         );
    //       }
    //       Promise.all( insertMultiple )
    //       .then( function( dataArray ) {
    //         var testDataKeys = Object.keys( testData );
    //         expect( dataArray.length ).to.be.deep.equal( testDataKeys.length );
    //         resolve();
    //       } );
    //     } );
    //   } );
    //   afterEach( function() {
    //     return new Promise( function( resolve, reject ) {
    //       var deleteMultiple = [];
    //       var testDataKeys = Object.keys( testData );
    //       for( var i = 0; i < 10; i++ ) {
    //         testId = {};
    //         testId[ schema1.primaryKey ] = testData[ testDataKeys[ i ] ][ schema1.primaryKey ];
    //         deleteMultiple.push(
    //           dbUtility1.delete( testId )
    //           .then( function( data ) {
    //             expect(data).to.be.a('number');
    //             expect(data).to.be.deep.equal(1);
    //             return data;
    //           } )
    //         );
    //       }
    //       Promise.all( deleteMultiple )
    //       .then( function( dataArray ) {
    //         var testDataKeys = Object.keys( testData );
    //         expect( dataArray.length ).to.be.deep.equal( testDataKeys.length );
    //         resolve();
    //       } );
    //     } );
    //   } );
    //   it( 'with undefined', function() {
    //     return dbUtility1.list()
    //     .then( function( data ) {
    //       expect( data ).to.be.an( 'array' );
    //       expect( data.length ).to.be.deep.equal( Object.keys( testData ).length );
    //       for( var i = 0; i < 10; i++ ) {
    //         var dataTemp = data[ i ];
    //         var getDataTemp = testData[ dataTemp[ schema1.primaryKey ] ];
    //         expect( dataTemp ).to.be.an( 'object' );
    //         expect( dataTemp ).to.have.deep.property( schema1.primaryKey );
    //         expect( dataTemp[ schema1.primaryKey ] ).to.be.deep.equal( getDataTemp[ schema1.primaryKey ] );
    //         expect( dataTemp[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
    //         expect( dataTemp ).to.have.deep.property( 'TIMESTAMP' );
    //         expect( dataTemp[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
    //         expect( dataTemp ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
    //         expect( dataTemp[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
    //         for( var i = 0; i < structureKeys.length; i++ ) {
    //           if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
    //             continue;
    //           }
    //           expect( dataTemp ).to.have.deep.property( structureKeys[i], getDataTemp[ structureKeys[ i ] ] );
    //           if ( dataTemp[ structureKeys[ i ] ] === null ) {
    //             expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( 'null' );
    //           } else {
    //             expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
    //           }
    //         }
    //       }
    //     } );
    //   } );
    //   it( 'with blank object', function() {
    //   return dbUtility1.list( [] )
    //     .catch( function( error ) {
    //       expect(error).to.be.an('error');
    //     } );
    //   } );
    // } );

    // LIST
    describe( 'list', function() {
      var testData=[];
      var testId=[];
      beforeEach( function() {
        testId = [];
        testData = [];
        return new Promise( function( resolve, reject ) {
          var insertMultiple = [];
          for( var i = 0; i < 10; i++ ) {
            insertMultiple.push(
              dbUtility1.insert( withoutPrimaryKey )
              .then( function( data ) {
                expect( data ).to.be.an( 'object' );
                expect( data ).to.have.deep.property( schema1.primaryKey );
                // expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
                expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
                expect( data ).to.have.deep.property( 'TIMESTAMP' );
                expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
                expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
                expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
                for( var i = 0; i < structureKeys.length; i++ ) {
                  if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
                    continue;
                  }
                  if( withoutPrimaryKey[ structureKeys[ i ] ] === undefined ) {
                    expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
                  } else {
                    expect( data ).to.have.deep.property( structureKeys[i], withoutPrimaryKey[ structureKeys[ i ] ] );
                  }
                  if ( data[ structureKeys[ i ] ] === null ) {
                    expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
                  } else {
                    expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
                  }
                }
                testData[ data[ schema1.primaryKey ] ] = data;
                testId.push( data[ schema1.primaryKey ] );
                return data;
              } )
            );
          }
          Promise.all( insertMultiple )
          .then( function( dataArray ) {
            var testDataKeys = Object.keys( testData );
            expect( dataArray.length ).to.be.deep.equal( testDataKeys.length );
            resolve();
          } );
        } );
      } );
      afterEach( function() {
        return new Promise( function( resolve, reject ) {
          var deleteMultiple = [];
          var testDataKeys = Object.keys( testData );
          for( var i = 0; i < 10; i++ ) {
            testId = {};
            testId[ schema1.primaryKey ] = testData[ testDataKeys[ i ] ][ schema1.primaryKey ];
            deleteMultiple.push(
              dbUtility1.delete( testId )
              .then( function( data ) {
                expect(data).to.be.a('number');
                expect(data).to.be.deep.equal(1);
                return data;
              } )
            );
          }
          Promise.all( deleteMultiple )
          .then( function( dataArray ) {
            var testDataKeys = Object.keys( testData );
            expect( dataArray.length ).to.be.deep.equal( testDataKeys.length );
            resolve();
          } );
        } );
      } );
      it( 'with undefined', function() {
        return dbUtility1.list()
        .catch( function( error ) {
         expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with blank object', function() {
      return dbUtility1.list( [] )
        .catch( function( error ) {
          expect(error).to.be.an('error');
        } );
      } );
      it( 'with single primary key', function() {
        var getId = testId[ 0 ];
        return dbUtility1.list( getId )
        .catch( function( error ) {
          expect(error).to.be.an('error');
        } );
      } );
      it( 'with single primary key in array', function() {
        var getId = [ testId[ 0 ] ];
        var getData = [ testData[ getId[ 0 ] ] ];
        return dbUtility1.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          data = data[ 0 ];
          getData = getData[ 0 ];
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( getData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], getData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with multiple primary key', function() {
        var getId = [];
        var getData = [];
        for( var i = 0; i < 10; i++ ) {
          getId.push( testId[ i ] );
          getData.push( testData[ getId[ i ] ] );
        }
        return dbUtility1.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 10; i++ ) {
            var dataTemp = data[ i ];
            var getDataTemp = getData[ i ];
            expect( dataTemp ).to.be.an( 'object' );
            expect( dataTemp ).to.have.deep.property( schema1.primaryKey );
            expect( dataTemp[ schema1.primaryKey ] ).to.be.deep.equal( getDataTemp[ schema1.primaryKey ] );
            expect( dataTemp[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP' );
            expect( dataTemp[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
            expect( dataTemp[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
            for( var i = 0; i < structureKeys.length; i++ ) {
              if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
                continue;
              }
              expect( dataTemp ).to.have.deep.property( structureKeys[i], getDataTemp[ structureKeys[ i ] ] );
              if ( dataTemp[ structureKeys[ i ] ] === null ) {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( 'null' );
              } else {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
              }
            }
          }
        } );
      } );
      it( 'with duplicate primary key', function() {
        var getId = [];
        var getData = [];
        for( var i = 0; i < 5; i++ ) {
          getId.push( testId[ i ] );
          getData.push( testData[ getId[ i ] ] );
        }
        for( var i = 0; i < 5; i++ ) {
          getId.push( testId[ i ] );
          getData.push( testData[ getId[ i + 5 ] ] );
        }
        return dbUtility1.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 10; i++ ) {
            var dataTemp = data[ i ];
            var getDataTemp = getData[ i ];
            expect( dataTemp ).to.be.an( 'object' );
            expect( dataTemp ).to.have.deep.property( schema1.primaryKey );
            expect( dataTemp[ schema1.primaryKey ] ).to.be.deep.equal( getDataTemp[ schema1.primaryKey ] );
            expect( dataTemp[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP' );
            expect( dataTemp[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
            expect( dataTemp[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
            for( var i = 0; i < structureKeys.length; i++ ) {
              if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
                continue;
              }
              expect( dataTemp ).to.have.deep.property( structureKeys[i], getDataTemp[ structureKeys[ i ] ] );
              if ( dataTemp[ structureKeys[ i ] ] === null ) {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( 'null' );
              } else {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
              }
            }
          }
        } );
      } );
      it( 'with multiple same primary key', function() {
        var getId = [];
        var getData = [];
        for( var i = 0; i < 10; i++ ) {
          getId.push( testId[ 0 ] );
          getData.push( testData[ getId[ 0 ] ] );
        }
        return dbUtility1.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 10; i++ ) {
            var dataTemp = data[ i ];
            var getDataTemp = getData[ i ];
            expect( dataTemp ).to.be.an( 'object' );
            expect( dataTemp ).to.have.deep.property( schema1.primaryKey );
            expect( dataTemp[ schema1.primaryKey ] ).to.be.deep.equal( getDataTemp[ schema1.primaryKey ] );
            expect( dataTemp[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP' );
            expect( dataTemp[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
            expect( dataTemp[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
            for( var i = 0; i < structureKeys.length; i++ ) {
              if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
                continue;
              }
              expect( dataTemp ).to.have.deep.property( structureKeys[i], getDataTemp[ structureKeys[ i ] ] );
              if ( dataTemp[ structureKeys[ i ] ] === null ) {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( 'null' );
              } else {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
              }
            }
          }
        } );
      } );
      it( 'with wrong primary key number', function() {
        var getId = [ -123,-0.0 ];
        var getData = [ null, null ];
        return dbUtility1.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 2; i++ ) {
           expect( data[ i ] ).to.be.a( 'null' );
           expect( data[ i ] ).to.be.deep.equal( getData[ i ] );
          }          
        } );
      } );
      it( 'with wrong primary key string', function() {
        var getId = [ "-123,-0.0","test1_id" ];
        var getData = [ null, null ];
        return dbUtility1.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 2; i++ ) {
           expect( data[ i ] ).to.be.a( 'null' );
           expect( data[ i ] ).to.be.deep.equal( getData[ i ] );
          }          
        } );
      } );
      it( 'with wrong primary key but same field', function() {
        var getId = [ "new Date()","2345-asd" ];
        var getData = [ null, null ];
        return dbUtility1.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 2; i++ ) {
           expect( data[ i ] ).to.be.a( 'null' );
           expect( data[ i ] ).to.be.deep.equal( getData[ i ] );
          }          
        } );
      } );
      it( 'with wrong primary key but different types', function() {
        var getId = ["2001-01-01", 1234, true];
        var getData = [ null, null, null ];
        return dbUtility1.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 3; i++ ) {
           expect( data[ i ] ).to.be.a( 'null' );
           expect( data[ i ] ).to.be.deep.equal( getData[ i ] );
          }          
        } );
      } );
      it( 'with same wrong primary key', function() {
        var getId = [ 0, 0, 0, 0 ];
        var getData = [ null, null, null, null ]
        return dbUtility1.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 4; i++ ) {
           expect( data[ i ] ).to.be.a( 'null' );
           expect( data[ i ] ).to.be.deep.equal( getData[ i ] );
          }          
        } );
      } );
      it( 'with duplicate primary key and duplicate wrong key in specific order', function() {
        var getId = [ 0, testId[0], testId[1], 0 ];
        var getData = [ null, testData[testId[0]], testData[testId[1]], null ];
        return dbUtility1.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          expect( data[ 0 ] ).to.be.a( 'null' );
          expect( data[ 0 ] ).to.be.deep.equal( getData[ 0 ] );
          expect( data[ 3 ] ).to.be.a( 'null' );
          expect( data[ 3 ] ).to.be.deep.equal( getData[ 3 ] );
          for( var i = 1; i < 3; i++ ) {
            var dataTemp = data[ i ];
            var getDataTemp = getData[ i ];
            expect( dataTemp ).to.be.an( 'object' );
            expect( dataTemp ).to.have.deep.property( schema1.primaryKey );
            expect( dataTemp[ schema1.primaryKey ] ).to.be.deep.equal( getDataTemp[ schema1.primaryKey ] );
            expect( dataTemp[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP' );
            expect( dataTemp[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
            expect( dataTemp[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
            for( var i = 0; i < structureKeys.length; i++ ) {
              if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
                continue;
              }
              expect( dataTemp ).to.have.deep.property( structureKeys[i], getDataTemp[ structureKeys[ i ] ] );
              if ( dataTemp[ structureKeys[ i ] ] === null ) {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( 'null' );
              } else {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
              }
            }
          }
        } );
      } );
    } );

    // GET
    describe( 'get', function() {
      var testData;
      var testId;
      beforeEach( function() {
        return dbUtility1.insert( withPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = {};
          testId = data[ schema1.primaryKey ];
          testData = {};
          testData = data;
        } );
      } );
      afterEach( function() {
        testId = {};
        testId[ schema1.primaryKey ] = testData[ schema1.primaryKey ];
        return dbUtility1.delete( testId )
        .then( function( data ) {
          expect(data).to.be.a('number');
          expect(data).to.be.deep.equal(1);
        } );
      } );
      it( 'with undefined', function() {
        return dbUtility1.get()
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with wrong type array', function() {
        return dbUtility1.get( [] )
        .catch( function(error) {
          expect(error).to.be.an('error');
        } );
      } );
      it( 'with wrong type object', function() {
        return dbUtility1.get( {} )
        .catch( function(error) {
          expect(error).to.be.an('error');
        } );
      } );
      it( 'with single primary key', function() {
        return dbUtility1.get( testId )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with wrong primary key number', function() {
        return dbUtility1.get( -0.0 )
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with wrong primary key string', function() {
        return dbUtility1.get( "test1_id" )
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with wrong primary key zero', function() {
        return dbUtility1.get( 0 )
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with wrong primary key null', function() {
        return dbUtility1.get( null )
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with wrong primary key empty string', function() {
        return dbUtility1.get( "" )
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with multiple primary keys', function() {
        return dbUtility1.get( testId, testId)
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
    } );

    // UPDATE
    describe( 'update', function() {
      var testData;
      var testId;
      beforeEach( function() {
        return dbUtility1.insert( withPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = {};
          testId[ schema1.primaryKey ] = data[ schema1.primaryKey ];
          testData = {};
          testData = data;
        } );
      } );
      afterEach( function() {
        testId = {};
        testId[ schema1.primaryKey ] = testData[ schema1.primaryKey ];
        return dbUtility1.delete( testId )
        .then( function( data ) {
          expect(data).to.be.a('number');
          expect(data).to.be.deep.equal(1);
        } );
      } );
      it( 'with undefined', function() {
        return dbUtility1.update()
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with one blank object and other undefined', function() {
        return dbUtility1.update( {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with both blank object', function() {
        return dbUtility1.update( {}, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with just primary key', function() {
        return dbUtility1.update( testId )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and data STRING', function() {
        var updateData = { STRING: "changed" };
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data TIMESTAMP', function() {
        var updateData = { TIMESTAMP: new Date( 1500899999990 ) };
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data INTEGER', function() {
        var updateData = { INTEGER: 1500899999990 };
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data FLOAT', function() {
        var updateData = { FLOAT: 1500899.9990 };
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data GEOPOINT', function() {
        var updateData = { GEOPOINT: { longitude: 43.43, latitude: 76.43 } };
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data OBJECT', function() {
        var updateData = { OBJECT: { "test": "pratilipi" } };
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data ARRAY', function() {
        var updateData = { ARRAY: [ "pratilipi", "test" ] };
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data NULL', function() {
        var updateData = { NULL: null };
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data BOOLEAN', function() {
        var updateData = { BOOLEAN: true };
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data string', function() {
        var updateData = { string: "changed" };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data timestamp', function() {
        var updateData = { timestamp: new Date( 1500899999990 ) };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] };
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data integer', function() {
        var updateData = { integer: 1500899999990 };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data float', function() {
        var updateData = { float: 1500899.9990 };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data geopoint', function() {
        var updateData = { geopoint: { longitude: 43.43, latitude: 76.43 } };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey.toLowerCase().toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase().toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data object', function() {
        var updateData = { object: { "test": "pratilipi" } };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data array', function() {
        var updateData = { array: [ "pratilipi", "test" ] };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data null', function() {
        var updateData = { null: null };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey.toLowerCase().toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data boolean', function() {
        var updateData = { boolean: true };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey.toLowerCase().toLowerCase().toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data', function() {
        var updateData = {
        'INTEGER' : 2,
        'FLOAT' : 23.5,
        'TIMESTAMP' : new Date(),
        'GEOPOINT' : {latitude:12.1234,longitude:34.5678},
        'OBJECT' : { ["test "+new Date().getTime()]: "test1 " + new Date().getTime()}
        };
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data lowercase', function() {
        var updateData = {
        'integer' : 2,
        'float' : 23.5,
        'timestamp' : new Date(),
        'geopoint' : {latitude:12.1234,longitude:34.5678},
        'object' : { ["test "+new Date().getTime()]: "test1 " + new Date().getTime()}
        };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testId[ schema1.primaryKey.toLowerCase() ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and extra fields and data', function() {
        testId.STRING = "fail";
        var updateData = { BOOLEAN: false };
        return dbUtility1.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with blank object and data', function() {
        var updateData = { BOOLEAN: false };
        return dbUtility1.update( {}, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and blank data', function() {
        return dbUtility1.update( testId, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and extra fields and blank data', function() {
        testId.STRING = "fail";
        return dbUtility1.update( testId, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and data BOOLEAN', function() {
        testId = { STRING: "test" };
        var updateData = { BOOLEAN: false };
        return dbUtility1.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with string and data boolean', function() {
        testId = { string: "test" };
        var updateData = { boolean: false };
        return dbUtility1.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with wrong key and wrong data', function() {
        testId = { abba: "dabba" };
        var updateData = { jabba: "oppa" };
        return dbUtility1.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and data primary key', function() {
        var updateData = { [ schema1.primaryKey ]: testId[ schema1.primaryKey ] };
        testId = { STRING: "test" };
        return dbUtility1.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and FLOAT and data primary key', function() {
        var updateData = { [ schema1.primaryKey ]: testId[ schema1.primaryKey ] };
        testId = { STRING: "test", FLOAT:12.34 };
        return dbUtility1.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and wrong data', function() {
        var updateData = { jabba: "oppa" };
        return dbUtility1.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and data having primary key', function() {
        var updateData = { BOOLEAN: false, [ schema1.primaryKey ]: testId[ schema1.primaryKey ] };
        return dbUtility1.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
    } );

    // PATCH
    describe( 'patch', function() {
      var testData;
      var testId;
      beforeEach( function() {
        return dbUtility1.insert( withPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = {};
          testId[ schema1.primaryKey ] = data[ schema1.primaryKey ];
          testData = {};
          testData = data;
        } );
      } );
      afterEach( function() {
        testId = {};
        testId[ schema1.primaryKey ] = testData[ schema1.primaryKey ];
        return dbUtility1.delete( testId )
        .then( function( data ) {
          expect(data).to.be.a('number');
          expect(data).to.be.deep.equal(1);
        } );
      } );
      it( 'with undefined', function() {
        return dbUtility1.patch()
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with one blank object and other undefined', function() {
        return dbUtility1.patch( {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with both blank object', function() {
        return dbUtility1.patch( {}, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with just primary key', function() {
        return dbUtility1.patch( testId )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and data STRING', function() {
        var patchData = { STRING: "changed" };
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data TIMESTAMP', function() {
        var patchData = { TIMESTAMP: new Date( 1500899999990 ) };
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data INTEGER', function() {
        var patchData = { INTEGER: 1500899999990 };
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data FLOAT', function() {
        var patchData = { FLOAT: 1500899.9990 };
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data GEOPOINT', function() {
        var patchData = { GEOPOINT: { longitude: 43.43, latitude: 76.43 } };
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data OBJECT', function() {
        var patchData = { OBJECT: { "test": "pratilipi" } };
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data ARRAY', function() {
        var patchData = { ARRAY: [ "pratilipi", "test" ] };
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data NULL', function() {
        var patchData = { NULL: null };
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data BOOLEAN', function() {
        var patchData = { BOOLEAN: true };
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data string', function() {
        var patchData = { string: "changed" };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data timestamp', function() {
        var patchData = { timestamp: new Date( 1500899999990 ) };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] };
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data integer', function() {
        var patchData = { integer: 1500899999990 };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data float', function() {
        var patchData = { float: 1500899.9990 };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data geopoint', function() {
        var patchData = { geopoint: { longitude: 43.43, latitude: 76.43 } };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data object', function() {
        var patchData = { object: { "test": "pratilipi" } };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data array', function() {
        var patchData = { array: [ "pratilipi", "test" ] };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data null', function() {
        var patchData = { null: null };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data boolean', function() {
        var patchData = { boolean: true };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data', function() {
        var patchData = {
        'INTEGER' : 2,
        'FLOAT' : 23.5,
        'TIMESTAMP' : new Date(),
        'GEOPOINT' : {latitude:12.1234,longitude:34.5678},
        'OBJECT' : { ["test "+new Date().getTime()]: "test1 " + new Date().getTime()}
        };
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data lowercase', function() {
        var patchData = {
        'integer' : 2,
        'float' : 23.5,
        'timestamp' : new Date(),
        'geopoint' : {latitude:12.1234,longitude:34.5678},
        'object' : { ["test "+new Date().getTime()]: "test1 " + new Date().getTime()}
        };
        testId = { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] }; 
        return dbUtility1.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( testData[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and extra fields and data', function() {
        testId.STRING = "fail";
        var patchData = { BOOLEAN: false };
        return dbUtility1.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with blank object and data', function() {
        var patchData = { BOOLEAN: false };
        return dbUtility1.patch( {}, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and blank data', function() {
        return dbUtility1.patch( testId, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and extra fields and blank data', function() {
        testId.STRING = "fail";
        return dbUtility1.patch( testId, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and data BOOLEAN', function() {
        testId = { STRING: "test" };
        var patchData = { BOOLEAN: false };
        return dbUtility1.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with string and data boolean', function() {
        testId = { string: "test" };
        var patchData = { boolean: false };
        return dbUtility1.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with wrong key and wrong data', function() {
        testId = { abba: "dabba" };
        var patchData = { jabba: "oppa" };
        return dbUtility1.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and data primary key', function() {
        var patchData = { [ schema1.primaryKey ]: testId[ schema1.primaryKey ] };
        testId = { STRING: "test" };
        return dbUtility1.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and FLOAT and data primary key', function() {
        var patchData = { [ schema1.primaryKey ]: testId[ schema1.primaryKey ] };
        testId = { STRING: "test", FLOAT:12.34 };
        return dbUtility1.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and wrong data', function() {
        var patchData = { jabba: "oppa" };
        return dbUtility1.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and data having primary key', function() {
        var patchData = { BOOLEAN: false, [ schema1.primaryKey ]: testId[ schema1.primaryKey ] };
        return dbUtility1.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
    } );

    // DELETE
    describe( 'delete', function() {
      var testId;
      var testData;
      beforeEach( function() {
        return dbUtility1.insert( withPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema1.primaryKey );
          expect( data[ schema1.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema1.primaryKey ] );
          expect( data[ schema1.primaryKey ] ).to.be.a( typeConversion[ schema1.structure[ schema1.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema1.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema1.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema1.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema1.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = {};
          testId[ schema1.primaryKey ] = data[ schema1.primaryKey ];
          testData = {};
          testData = data;
        } );
      } );
      it( 'with undefined', function() {
        return dbUtility1.delete()
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility1.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with blank object', function() {
        return dbUtility1.delete( {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility1.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with wrong type', function() {
        return dbUtility1.delete( 0 )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility1.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with wrong primary key', function() {
        return dbUtility1.delete( { [ schema1.primaryKey ]: 100 } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility1.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with primary key', function() {
        return dbUtility1.delete( testId )
        .then( function( data ) {
          expect(data).to.be.a('number');
          expect(data).to.be.deep.equal(1);
        } );
      } );
      it( 'with primary key as string enclosed', function() {
        return dbUtility1.delete( { [ schema1.primaryKey ]: "1234512345123452" } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility1.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with another keyname', function() {
        return dbUtility1.delete( { "STRING": "test1" } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility1.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with primary key negative number', function() {
        return dbUtility1.delete( { [ schema1.primaryKey ]: -100 } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility1.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with wrong keyname', function() {
        return dbUtility1.delete( { "abba": "dabba" } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility1.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with wrong key and primary key', function() {
        return dbUtility1.delete( { "abba": "dabba", [ schema1.primaryKey ]: testId[ schema1.primaryKey ] } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility1.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with extra fieldname and primary key', function() {
        return dbUtility1.delete( { "string": "test", [ schema1.primaryKey ]: testId[ schema1.primaryKey ] } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility1.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with primary key in small', function() {
        return dbUtility1.delete( { [ schema1.primaryKey.toLowerCase() ]: testId[ schema1.primaryKey ] } )
        .then( function( data ) {
          expect(data).to.be.a('number');
          expect(data).to.be.deep.equal(1);
        } );
      } );
    } );
  } );

  describe( 'dbUtility2 Tests', function() {
    var withPrimaryKey = {
    [ schema2.primaryKey ] : generateNewKey() + "",
    'INTEGER' : 2,
    'FLOAT' : 23.5,
    'BOOLEAN' : true,
    'ARRAY' : [ 123, 456 ],
    'STRING' : 'test1',
    'TIMESTAMP' : new Date(),
    'GEOPOINT' : { latitude: 12.1234, longitude: 34.5678 },
    'OBJECT' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() }
    };
    var withoutPrimaryKey = {
    'INTEGER' : 2,
    'FLOAT' : 23.5,
    'BOOLEAN' : true,
    'ARRAY' : [ 123, 456 ],
    'STRING' : 'test1',
    'TIMESTAMP' : new Date(),
    'GEOPOINT' : { latitude: 12.1234, longitude: 34.5678 },
    'OBJECT' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() }
    };

    var structureKeys = Object.keys( schema2.structure );

    // INSERT
    describe( 'insert', function() {
      var testId;
      afterEach( function() {
        if( testId != null ) {
          return dbUtility2.delete( { [ schema2.primaryKey ]: testId } )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        }
      } );
      it( 'with undefined', function() {
        return dbUtility2.insert()
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          testId = null;
        } );
      } );
      it( 'with blank object', function() {
        return dbUtility2.insert( {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          testId = null;
        } );
      } );
      it( 'with no primary key', function() {
        return dbUtility2.insert( withoutPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withoutPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withoutPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it('with primary key',function() {
        return dbUtility2.insert( withPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with same primary key', function() {
        return dbUtility2.insert( withPrimaryKey )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          testId = null;
        } );
      } );
      it( 'with no primary key same data', function() {
        return dbUtility2.insert( withoutPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withoutPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withoutPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just STRING', function() {
        var testData = { "STRING": "test2" };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just TIMESTAMP', function() {
        var testData = { "TIMESTAMP": new Date( 0 ) };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just INTEGER', function() {
        var testData = { "INTEGER": 987 };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just FLOAT', function() {
        var testData = { "FLOAT": 987.654 };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just GEOPOINT', function() {
        var testData = { "GEOPOINT": { latitude:18.76, longitude: -18.76 } };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just OBJECT', function() {
        var testData = { "OBJECT": { "test":"teststring", "test2": 123 } };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just ARRAY', function() {
        var testData = { "ARRAY": [ 123, 456, "qwerty" ] };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just NULL', function() {
        var testData = { "NULL": null };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
              
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just BOOLEAN', function() {
        var testData = { "BOOLEAN": true };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
              
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just string', function() {
        var testData = { "string": "test2" };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just timestamp', function() {
        var testData = { "timestamp": new Date( 0 ) };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just integer', function() {
        var testData = { "integer": 987 };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just float', function() {
        var testData = { "float": 987.654 };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just geopoint', function() {
        var testData = { "geopoint": { latitude:18.76, longitude: -18.76 } };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just object', function() {
        var testData = { "object": { "test":"teststring", "test2": 123 } };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just array', function() {
        var testData = { "array": [ 123, 456, "qwerty" ] };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just null', function() {
        var testData = { "null": null };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and just boolean', function() {
        var testData = { "boolean": true };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just STRING', function() {
        var testData = { [ schema2.primaryKey ]: generateNewKey() + "", "STRING": "test2" };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just TIMESTAMP', function() {
        var testData = { [ schema2.primaryKey ]: generateNewKey() + "", "TIMESTAMP": new Date( 0 ) };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just INTEGER', function() {
        var testData = { [ schema2.primaryKey ]: generateNewKey() + "", "INTEGER": 987 };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just FLOAT', function() {
        var testData = { [ schema2.primaryKey ]: generateNewKey() + "", "FLOAT": 987.654 };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just GEOPOINT', function() {
        var testData = { [ schema2.primaryKey ]: generateNewKey() + "", "GEOPOINT": { latitude:18.76, longitude: -18.76 } };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just OBJECT', function() {
        var testData = { [ schema2.primaryKey ]: generateNewKey() + "", "OBJECT": { "test":"teststring", "test2": 123 } };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just ARRAY', function() {
        var testData = { [ schema2.primaryKey ]: generateNewKey() + "", "ARRAY": [ 123, 456, "qwerty" ] };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just NULL', function() {
        var testData = { [ schema2.primaryKey ]: generateNewKey() + "", "NULL": null };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just BOOLEAN', function() {
        var testData = { [ schema2.primaryKey ]: generateNewKey() + "", "BOOLEAN": true };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just string', function() {
        var testData = { [ schema2.primaryKey.toLowerCase() ]: generateNewKey() + "", "string": "test2" };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just timestamp', function() {
        var testData = { [ schema2.primaryKey.toLowerCase() ]: generateNewKey() + "", "timestamp": new Date( 0 ) };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just integer', function() {
        var testData = { [ schema2.primaryKey.toLowerCase() ]: generateNewKey() + "", "integer": 987 };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just float', function() {
        var testData = { [ schema2.primaryKey.toLowerCase() ]: generateNewKey() + "", "float": 987.654 };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just geopoint', function() {
        var testData = { [ schema2.primaryKey.toLowerCase() ]: generateNewKey() + "", "geopoint": { latitude:18.76, longitude: -18.76 } };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just object', function() {
        var testData = { [ schema2.primaryKey.toLowerCase() ]: generateNewKey() + "", "object": { "test":"teststring", "test2": 123 } };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just array', function() {
        var testData = { [ schema2.primaryKey.toLowerCase() ]: generateNewKey() + "", "array": [ 123, 456, "qwerty" ] };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just null', function() {
        var testData = { [ schema2.primaryKey.toLowerCase() ]: generateNewKey() + "", "null": null };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and just boolean', function() {
        var testData = { [ schema2.primaryKey.toLowerCase() ]: generateNewKey() + "", "boolean": true };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and same small data jumbled up lowercase', function() {        
        var testData = {
        'geopoint' : { latitude: 12.1234, longitude: 34.5678 },
        'integer' : 2,
        'float' : 23.5,
        'string' : 'test1',
        'timestamp' : new Date(),
        'array' : [ 123, 456 ],
        'boolean' : true,
        'object' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() }
        };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and same data jumbled up lowercase', function() {
        var testData = {
        'float' : 23.5,
        'boolean' : true,
        'integer' : 2,
        'geopoint' : { latitude: 12.1234, longitude: 34.5678 },
        'array' : [ 123, 456 ],
        'object' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() },
        [ schema2.primaryKey.toLowerCase() ]: generateNewKey() + "",
        'string' : 'test1',
        'timestamp' : new Date()
        };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and same data jumbled up', function() {        
        var testData = {
        'GEOPOINT' : { latitude: 12.1234, longitude: 34.5678 },
        'INTEGER' : 2,
        'FLOAT' : 23.5,
        'STRING' : 'test1',
        'TIMESTAMP' : new Date(),
        'ARRAY' : [ 123, 456 ],
        'BOOLEAN' : true,
        'OBJECT' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() }
        };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with primary key and same data jumbled up', function() {
        var testData = {
        'FLOAT' : 23.5,
        'BOOLEAN' : true,
        'INTEGER' : 2,
        'GEOPOINT' : { latitude: 12.1234, longitude: 34.5678 },
        'ARRAY' : [ 123, 456 ],
        'OBJECT' : { [ "test "+new Date().getTime() ]: "test1 " + new Date().getTime() },
        [ schema2.primaryKey ]: generateNewKey() + "",
        'STRING' : 'test1',
        'TIMESTAMP' : new Date()
        };
        return dbUtility2.insert( testData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( testData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = data[ schema2.primaryKey ];
        } );
      } );
      it( 'with no primary key and data not conforming to schema', function() {
        return dbUtility2.insert( { "abba":"dabba", "jaaba":"oppa" } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          testId = null;
        } );
      } );
      it( 'with primary key and data not conforming to schema', function() {
        return dbUtility2.insert( { [ schema2.primaryKey.toLowerCase() ]: generateNewKey() + "", "name":"sarah", "abba":"dabba" } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          testId = null;
        } );
      } );
    } );

    // QUERY
    describe( 'query', function() {
      var testData;
      var testId;
      beforeEach( function() {
        return dbUtility2.insert( withPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = {};
          testId[ schema2.primaryKey ] = data[ schema2.primaryKey ];
          testData = {};
          testData = data;
        } );
      } );
      afterEach( function() {
        testId = {};
        testId[ schema2.primaryKey ] = testData[ schema2.primaryKey ];
        return dbUtility2.delete( testId )
        .then( function( data ) {
          expect(data).to.be.a('number');
          expect(data).to.be.deep.equal(1);
        } );
      } );
    } );

    // LIST
    describe( 'list', function() {
      var testData=[];
      var testId=[];
      beforeEach( function() {
        testId = [];
        testData = [];
        return new Promise( function( resolve, reject ) {
          var insertMultiple = [];
          for( var i = 0; i < 10; i++ ) {
            insertMultiple.push(
              dbUtility2.insert( withoutPrimaryKey )
              .then( function( data ) {
                expect( data ).to.be.an( 'object' );
                expect( data ).to.have.deep.property( schema2.primaryKey );
                // expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
                expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
                expect( data ).to.have.deep.property( 'TIMESTAMP' );
                expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
                expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
                expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
                for( var i = 0; i < structureKeys.length; i++ ) {
                  if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
                    continue;
                  }
                  if( withoutPrimaryKey[ structureKeys[ i ] ] === undefined ) {
                    expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
                  } else {
                    expect( data ).to.have.deep.property( structureKeys[i], withoutPrimaryKey[ structureKeys[ i ] ] );
                  }
                  if ( data[ structureKeys[ i ] ] === null ) {
                    expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
                  } else {
                    expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
                  }
                }
                testData[ data[ schema2.primaryKey ] ] = data;
                testId.push( data[ schema2.primaryKey ] );
                return data;
              } )
            );
          }
          Promise.all( insertMultiple )
          .then( function( dataArray ) {
            var testDataKeys = Object.keys( testData );
            expect( dataArray.length ).to.be.deep.equal( testDataKeys.length );
            resolve();
          } );
        } );
      } );
      afterEach( function() {
        return new Promise( function( resolve, reject ) {
          var deleteMultiple = [];
          var testDataKeys = Object.keys( testData );
          for( var i = 0; i < 10; i++ ) {
            testId = {};
            testId[ schema2.primaryKey ] = testData[ testDataKeys[ i ] ][ schema2.primaryKey ];
            deleteMultiple.push(
              dbUtility2.delete( testId )
              .then( function( data ) {
                expect(data).to.be.a('number');
                expect(data).to.be.deep.equal(1);
                return data;
              } )
            );
          }
          Promise.all( deleteMultiple )
          .then( function( dataArray ) {
            var testDataKeys = Object.keys( testData );
            expect( dataArray.length ).to.be.deep.equal( testDataKeys.length );
            resolve();
          } );
        } );
      } );
      it( 'with undefined', function() {
        return dbUtility2.list()
        .catch( function( error ) {
         expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with blank object', function() {
      return dbUtility2.list( [] )
        .catch( function( error ) {
          expect(error).to.be.an('error');
        } );
      } );
      it( 'with single primary key', function() {
        var getId = testId[ 0 ];
        return dbUtility2.list( getId )
        .catch( function( error ) {
          expect(error).to.be.an('error');
        } );
      } );
      it( 'with single primary key in array', function() {
        var getId = [ testId[ 0 ] ];
        var getData = [ testData[ getId[ 0 ] ] ];
        return dbUtility2.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          data = data[ 0 ];
          getData = getData[ 0 ];
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( getData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], getData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with multiple primary key', function() {
        var getId = [];
        var getData = [];
        for( var i = 0; i < 10; i++ ) {
          getId.push( testId[ i ] );
          getData.push( testData[ getId[ i ] ] );
        }
        return dbUtility2.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 10; i++ ) {
            var dataTemp = data[ i ];
            var getDataTemp = getData[ i ];
            expect( dataTemp ).to.be.an( 'object' );
            expect( dataTemp ).to.have.deep.property( schema2.primaryKey );
            expect( dataTemp[ schema2.primaryKey ] ).to.be.deep.equal( getDataTemp[ schema2.primaryKey ] );
            expect( dataTemp[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP' );
            expect( dataTemp[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
            expect( dataTemp[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
            for( var i = 0; i < structureKeys.length; i++ ) {
              if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
                continue;
              }
              expect( dataTemp ).to.have.deep.property( structureKeys[i], getDataTemp[ structureKeys[ i ] ] );
              if ( dataTemp[ structureKeys[ i ] ] === null ) {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( 'null' );
              } else {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
              }
            }
          }
        } );
      } );
      it( 'with duplicate primary key', function() {
        var getId = [];
        var getData = [];
        for( var i = 0; i < 5; i++ ) {
          getId.push( testId[ i ] );
          getData.push( testData[ getId[ i ] ] );
        }
        for( var i = 0; i < 5; i++ ) {
          getId.push( testId[ i ] );
          getData.push( testData[ getId[ i + 5 ] ] );
        }
        return dbUtility2.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 10; i++ ) {
            var dataTemp = data[ i ];
            var getDataTemp = getData[ i ];
            expect( dataTemp ).to.be.an( 'object' );
            expect( dataTemp ).to.have.deep.property( schema2.primaryKey );
            expect( dataTemp[ schema2.primaryKey ] ).to.be.deep.equal( getDataTemp[ schema2.primaryKey ] );
            expect( dataTemp[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP' );
            expect( dataTemp[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
            expect( dataTemp[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
            for( var i = 0; i < structureKeys.length; i++ ) {
              if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
                continue;
              }
              expect( dataTemp ).to.have.deep.property( structureKeys[i], getDataTemp[ structureKeys[ i ] ] );
              if ( dataTemp[ structureKeys[ i ] ] === null ) {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( 'null' );
              } else {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
              }
            }
          }
        } );
      } );
      it( 'with multiple same primary key', function() {
        var getId = [];
        var getData = [];
        for( var i = 0; i < 10; i++ ) {
          getId.push( testId[ 0 ] );
          getData.push( testData[ getId[ 0 ] ] );
        }
        return dbUtility2.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 10; i++ ) {
            var dataTemp = data[ i ];
            var getDataTemp = getData[ i ];
            expect( dataTemp ).to.be.an( 'object' );
            expect( dataTemp ).to.have.deep.property( schema2.primaryKey );
            expect( dataTemp[ schema2.primaryKey ] ).to.be.deep.equal( getDataTemp[ schema2.primaryKey ] );
            expect( dataTemp[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP' );
            expect( dataTemp[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
            expect( dataTemp[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
            for( var i = 0; i < structureKeys.length; i++ ) {
              if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
                continue;
              }
              expect( dataTemp ).to.have.deep.property( structureKeys[i], getDataTemp[ structureKeys[ i ] ] );
              if ( dataTemp[ structureKeys[ i ] ] === null ) {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( 'null' );
              } else {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
              }
            }
          }
        } );
      } );
      it( 'with wrong primary key number', function() {
        var getId = [ -123,-0.0 ];
        var getData = [ null, null ];
        return dbUtility2.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 2; i++ ) {
           expect( data[ i ] ).to.be.a( 'null' );
           expect( data[ i ] ).to.be.deep.equal( getData[ i ] );
          }          
        } );
      } );
      it( 'with wrong primary key string', function() {
        var getId = [ "-123,-0.0","test1_id" ];
        var getData = [ null, null ];
        return dbUtility2.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 2; i++ ) {
           expect( data[ i ] ).to.be.a( 'null' );
           expect( data[ i ] ).to.be.deep.equal( getData[ i ] );
          }          
        } );
      } );
      it( 'with wrong primary key but same field', function() {
        var getId = [ "new Date()","2345-asd" ];
        var getData = [ null, null ];
        return dbUtility2.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 2; i++ ) {
           expect( data[ i ] ).to.be.a( 'null' );
           expect( data[ i ] ).to.be.deep.equal( getData[ i ] );
          }          
        } );
      } );
      it( 'with wrong primary key but different types', function() {
        var getId = ["2001-01-01", 1234, true];
        var getData = [ null, null, null ];
        return dbUtility2.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 3; i++ ) {
           expect( data[ i ] ).to.be.a( 'null' );
           expect( data[ i ] ).to.be.deep.equal( getData[ i ] );
          }          
        } );
      } );
      it( 'with same wrong primary key', function() {
        var getId = [ "0", "0", "0", "0" ];
        var getData = [ null, null, null, null ]
        return dbUtility2.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          for( var i = 0; i < 4; i++ ) {
           expect( data[ i ] ).to.be.a( 'null' );
           expect( data[ i ] ).to.be.deep.equal( getData[ i ] );
          }          
        } );
      } );
      it( 'with duplicate primary key and duplicate wrong key in specific order', function() {
        var getId = [ "0", testId[0], testId[1], "0" ];
        var getData = [ null, testData[testId[0]], testData[testId[1]], null ];
        return dbUtility2.list( getId )
        .then( function( data ) {
          expect( data ).to.be.an( 'array' );
          expect( data.length ).to.be.deep.equal( getData.length );
          expect( data[ 0 ] ).to.be.a( 'null' );
          expect( data[ 0 ] ).to.be.deep.equal( getData[ 0 ] );
          expect( data[ 3 ] ).to.be.a( 'null' );
          expect( data[ 3 ] ).to.be.deep.equal( getData[ 3 ] );
          for( var i = 1; i < 3; i++ ) {
            var dataTemp = data[ i ];
            var getDataTemp = getData[ i ];
            expect( dataTemp ).to.be.an( 'object' );
            expect( dataTemp ).to.have.deep.property( schema2.primaryKey );
            expect( dataTemp[ schema2.primaryKey ] ).to.be.deep.equal( getDataTemp[ schema2.primaryKey ] );
            expect( dataTemp[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP' );
            expect( dataTemp[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
            expect( dataTemp ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
            expect( dataTemp[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
            for( var i = 0; i < structureKeys.length; i++ ) {
              if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
                continue;
              }
              expect( dataTemp ).to.have.deep.property( structureKeys[i], getDataTemp[ structureKeys[ i ] ] );
              if ( dataTemp[ structureKeys[ i ] ] === null ) {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( 'null' );
              } else {
                expect( dataTemp[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
              }
            }
          }
        } );
      } );
    } );

    // GET
    describe( 'get', function() {
      var testData;
      var testId;
      beforeEach( function() {
        return dbUtility2.insert( withPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = {};
          testId = data[ schema2.primaryKey ];
          testData = {};
          testData = data;
        } );
      } );
      afterEach( function() {
        testId = {};
        testId[ schema2.primaryKey ] = testData[ schema2.primaryKey ];
        return dbUtility2.delete( testId )
        .then( function( data ) {
          expect(data).to.be.a('number');
          expect(data).to.be.deep.equal(1);
        } );
      } );
      it( 'with undefined', function() {
        return dbUtility2.get()
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with wrong type array', function() {
        return dbUtility2.get( [] )
        .catch( function(error) {
          expect(error).to.be.an('error');
        } );
      } );
      it( 'with wrong type object', function() {
        return dbUtility2.get( {} )
        .catch( function(error) {
          expect(error).to.be.an('error');
        } );
      } );
      it( 'with single primary key', function() {
        return dbUtility2.get( testId )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with wrong primary key number', function() {
        return dbUtility2.get( -0.0 )
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with wrong primary key string', function() {
        return dbUtility2.get( "test1_id" )
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with wrong primary key zero', function() {
        return dbUtility2.get( 0 )
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with wrong primary key null', function() {
        return dbUtility2.get( null )
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with wrong primary key empty string', function() {
        return dbUtility2.get( "" )
        .then( function( data ) {
          expect( data ).to.be.a( 'null' );
          expect( data ).to.be.deep.equal( null );
        } );
      } );
      it( 'with multiple primary keys', function() {
        return dbUtility2.get( testId, testId)
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
    } );

    // UPDATE
    describe( 'update', function() {
      var testData;
      var testId;
      beforeEach( function() {
        return dbUtility2.insert( withPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = {};
          testId[ schema2.primaryKey ] = data[ schema2.primaryKey ];
          testData = {};
          testData = data;
        } );
      } );
      afterEach( function() {
        testId = {};
        testId[ schema2.primaryKey ] = testData[ schema2.primaryKey ];
        return dbUtility2.delete( testId )
        .then( function( data ) {
          expect(data).to.be.a('number');
          expect(data).to.be.deep.equal(1);
        } );
      } );
      it( 'with undefined', function() {
        return dbUtility2.update()
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with one blank object and other undefined', function() {
        return dbUtility2.update( {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with both blank object', function() {
        return dbUtility2.update( {}, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with just primary key', function() {
        return dbUtility2.update( testId )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and data STRING', function() {
        var updateData = { STRING: "changed" };
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data TIMESTAMP', function() {
        var updateData = { TIMESTAMP: new Date( 1500899999990 ) };
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data INTEGER', function() {
        var updateData = { INTEGER: 1500899999990 };
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data FLOAT', function() {
        var updateData = { FLOAT: 1500899.9990 };
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data GEOPOINT', function() {
        var updateData = { GEOPOINT: { longitude: 43.43, latitude: 76.43 } };
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data OBJECT', function() {
        var updateData = { OBJECT: { "test": "pratilipi" } };
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data ARRAY', function() {
        var updateData = { ARRAY: [ "pratilipi", "test" ] };
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data NULL', function() {
        var updateData = { NULL: null };
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data BOOLEAN', function() {
        var updateData = { BOOLEAN: true };
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data string', function() {
        var updateData = { string: "changed" };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data timestamp', function() {
        var updateData = { timestamp: new Date( 1500899999990 ) };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] };
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data integer', function() {
        var updateData = { integer: 1500899999990 };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data float', function() {
        var updateData = { float: 1500899.9990 };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data geopoint', function() {
        var updateData = { geopoint: { longitude: 43.43, latitude: 76.43 } };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey.toLowerCase().toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase().toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data object', function() {
        var updateData = { object: { "test": "pratilipi" } };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data array', function() {
        var updateData = { array: [ "pratilipi", "test" ] };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data null', function() {
        var updateData = { null: null };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey.toLowerCase().toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data boolean', function() {
        var updateData = { boolean: true };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey.toLowerCase().toLowerCase().toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data', function() {
        var updateData = {
        'INTEGER' : 2,
        'FLOAT' : 23.5,
        'TIMESTAMP' : new Date(),
        'GEOPOINT' : {latitude:12.1234,longitude:34.5678},
        'OBJECT' : { ["test "+new Date().getTime()]: "test1 " + new Date().getTime()}
        };
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data lowercase', function() {
        var updateData = {
        'integer' : 2,
        'float' : 23.5,
        'timestamp' : new Date(),
        'geopoint' : {latitude:12.1234,longitude:34.5678},
        'object' : { ["test "+new Date().getTime()]: "test1 " + new Date().getTime()}
        };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.update( testId, updateData )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testId[ schema2.primaryKey.toLowerCase() ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( updateData[ structureKeys[ i ].toLowerCase() ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], updateData[ structureKeys[ i ].toLowerCase() ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and extra fields and data', function() {
        testId.STRING = "fail";
        var updateData = { BOOLEAN: false };
        return dbUtility2.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with blank object and data', function() {
        var updateData = { BOOLEAN: false };
        return dbUtility2.update( {}, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and blank data', function() {
        return dbUtility2.update( testId, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and extra fields and blank data', function() {
        testId.STRING = "fail";
        return dbUtility2.update( testId, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and data BOOLEAN', function() {
        testId = { STRING: "test" };
        var updateData = { BOOLEAN: false };
        return dbUtility2.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with string and data boolean', function() {
        testId = { string: "test" };
        var updateData = { boolean: false };
        return dbUtility2.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with wrong key and wrong data', function() {
        testId = { abba: "dabba" };
        var updateData = { jabba: "oppa" };
        return dbUtility2.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and data primary key', function() {
        var updateData = { [ schema2.primaryKey ]: testId[ schema2.primaryKey ] };
        testId = { STRING: "test" };
        return dbUtility2.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and FLOAT and data primary key', function() {
        var updateData = { [ schema2.primaryKey ]: testId[ schema2.primaryKey ] };
        testId = { STRING: "test", FLOAT:12.34 };
        return dbUtility2.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and wrong data', function() {
        var updateData = { jabba: "oppa" };
        return dbUtility2.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and data having primary key', function() {
        var updateData = { BOOLEAN: false, [ schema2.primaryKey ]: testId[ schema2.primaryKey ] };
        return dbUtility2.update( testId, updateData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
    } );

    // PATCH
    describe( 'patch', function() {
      var testData;
      var testId;
      beforeEach( function() {
        return dbUtility2.insert( withPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = {};
          testId[ schema2.primaryKey ] = data[ schema2.primaryKey ];
          testData = {};
          testData = data;
        } );
      } );
      afterEach( function() {
        testId = {};
        testId[ schema2.primaryKey ] = testData[ schema2.primaryKey ];
        return dbUtility2.delete( testId )
        .then( function( data ) {
          expect(data).to.be.a('number');
          expect(data).to.be.deep.equal(1);
        } );
      } );
      it( 'with undefined', function() {
        return dbUtility2.patch()
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with one blank object and other undefined', function() {
        return dbUtility2.patch( {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with both blank object', function() {
        return dbUtility2.patch( {}, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with just primary key', function() {
        return dbUtility2.patch( testId )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and data STRING', function() {
        var patchData = { STRING: "changed" };
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data TIMESTAMP', function() {
        var patchData = { TIMESTAMP: new Date( 1500899999990 ) };
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data INTEGER', function() {
        var patchData = { INTEGER: 1500899999990 };
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data FLOAT', function() {
        var patchData = { FLOAT: 1500899.9990 };
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data GEOPOINT', function() {
        var patchData = { GEOPOINT: { longitude: 43.43, latitude: 76.43 } };
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data OBJECT', function() {
        var patchData = { OBJECT: { "test": "pratilipi" } };
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data ARRAY', function() {
        var patchData = { ARRAY: [ "pratilipi", "test" ] };
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data NULL', function() {
        var patchData = { NULL: null };
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data BOOLEAN', function() {
        var patchData = { BOOLEAN: true };
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data string', function() {
        var patchData = { string: "changed" };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data timestamp', function() {
        var patchData = { timestamp: new Date( 1500899999990 ) };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] };
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data integer', function() {
        var patchData = { integer: 1500899999990 };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data float', function() {
        var patchData = { float: 1500899.9990 };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data geopoint', function() {
        var patchData = { geopoint: { longitude: 43.43, latitude: 76.43 } };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data object', function() {
        var patchData = { object: { "test": "pratilipi" } };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data array', function() {
        var patchData = { array: [ "pratilipi", "test" ] };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data null', function() {
        var patchData = { null: null };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data boolean', function() {
        var patchData = { boolean: true };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data', function() {
        var patchData = {
        'INTEGER' : 2,
        'FLOAT' : 23.5,
        'TIMESTAMP' : new Date(),
        'GEOPOINT' : {latitude:12.1234,longitude:34.5678},
        'OBJECT' : { ["test "+new Date().getTime()]: "test1 " + new Date().getTime()}
        };
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ] ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and data lowercase', function() {
        var patchData = {
        'integer' : 2,
        'float' : 23.5,
        'timestamp' : new Date(),
        'geopoint' : {latitude:12.1234,longitude:34.5678},
        'object' : { ["test "+new Date().getTime()]: "test1 " + new Date().getTime()}
        };
        testId = { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] }; 
        return dbUtility2.patch( testId, patchData )
        .then( function( data ) {
          var patchKeys = Object.keys( patchData )
          for( var i = 0; i < patchKeys.length; i++ ) {
            testData[ patchKeys[ i ].toUpperCase() ] = patchData[ patchKeys[ i ] ];
          }
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( testData[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            expect( data ).to.have.deep.property( structureKeys[i], testData[ structureKeys[ i ] ] );
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
        } );
      } );
      it( 'with primary key and extra fields and data', function() {
        testId.STRING = "fail";
        var patchData = { BOOLEAN: false };
        return dbUtility2.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with blank object and data', function() {
        var patchData = { BOOLEAN: false };
        return dbUtility2.patch( {}, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and blank data', function() {
        return dbUtility2.patch( testId, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and extra fields and blank data', function() {
        testId.STRING = "fail";
        return dbUtility2.patch( testId, {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and data BOOLEAN', function() {
        testId = { STRING: "test" };
        var patchData = { BOOLEAN: false };
        return dbUtility2.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with string and data boolean', function() {
        testId = { string: "test" };
        var patchData = { boolean: false };
        return dbUtility2.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with wrong key and wrong data', function() {
        testId = { abba: "dabba" };
        var patchData = { jabba: "oppa" };
        return dbUtility2.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and data primary key', function() {
        var patchData = { [ schema2.primaryKey ]: testId[ schema2.primaryKey ] };
        testId = { STRING: "test" };
        return dbUtility2.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with STRING and FLOAT and data primary key', function() {
        var patchData = { [ schema2.primaryKey ]: testId[ schema2.primaryKey ] };
        testId = { STRING: "test", FLOAT:12.34 };
        return dbUtility2.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and wrong data', function() {
        var patchData = { jabba: "oppa" };
        return dbUtility2.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
      it( 'with primary key and data having primary key', function() {
        var patchData = { BOOLEAN: false, [ schema2.primaryKey ]: testId[ schema2.primaryKey ] };
        return dbUtility2.patch( testId, patchData )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
        } );
      } );
    } );

    // DELETE
    describe( 'delete', function() {
      var testId;
      var testData;
      beforeEach( function() {
        return dbUtility2.insert( withPrimaryKey )
        .then( function( data ) {
          expect( data ).to.be.an( 'object' );
          expect( data ).to.have.deep.property( schema2.primaryKey );
          expect( data[ schema2.primaryKey ] ).to.be.deep.equal( withPrimaryKey[ schema2.primaryKey ] );
          expect( data[ schema2.primaryKey ] ).to.be.a( typeConversion[ schema2.structure[ schema2.primaryKey ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP' );
          expect( data[ 'TIMESTAMP' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP' ].type ] );
          expect( data ).to.have.deep.property( 'TIMESTAMP_WITH_STRING' );
          expect( data[ 'TIMESTAMP_WITH_STRING' ]).to.be.a( typeConversion[ schema2.structure[ 'TIMESTAMP_WITH_STRING' ].type ] );
          for( var i = 0; i < structureKeys.length; i++ ) {
            if( structureKeys[ i ] === schema2.primaryKey || structureKeys[ i ] === 'TIMESTAMP_WITH_STRING' || structureKeys[ i ] === 'TIMESTAMP' ) {
              continue;
            }
            if( withPrimaryKey[ structureKeys[ i ] ] === undefined ) {
              expect( data ).to.have.deep.property( structureKeys[i], schema2.structure[ structureKeys[ i ] ].default );
            } else {
              expect( data ).to.have.deep.property( structureKeys[i], withPrimaryKey[ structureKeys[ i ] ] );
            }
            if ( data[ structureKeys[ i ] ] === null ) {
              expect( data[ structureKeys[ i ] ] ).to.be.a( 'null' );
            } else {
              expect( data[ structureKeys[ i ] ] ).to.be.a( typeConversion[ schema2.structure[ structureKeys[ i ] ].type ] );
            }
          }
          testId = {};
          testId[ schema2.primaryKey ] = data[ schema2.primaryKey ];
          testData = {};
          testData = data;
        } );
      } );
      it( 'with undefined', function() {
        return dbUtility2.delete()
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility2.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with blank object', function() {
        return dbUtility2.delete( {} )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility2.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with wrong type', function() {
        return dbUtility2.delete( 0 )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility2.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with wrong primary key', function() {
        return dbUtility2.delete( { [ schema2.primaryKey ]: "100" } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility2.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with primary key', function() {
        return dbUtility2.delete( testId )
        .then( function( data ) {
          expect(data).to.be.a('number');
          expect(data).to.be.deep.equal(1);
        } );
      } );
      it( 'with primary key as number', function() {
        return dbUtility2.delete( { [ schema2.primaryKey ]: 1000 } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility2.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with another keyname', function() {
        return dbUtility2.delete( { "STRING": "test1" } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility2.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with primary key negative number', function() {
        return dbUtility2.delete( { [ schema2.primaryKey ]: -100 } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility2.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with wrong keyname', function() {
        return dbUtility2.delete( { "abba": "dabba" } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility2.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with wrong key and primary key', function() {
        return dbUtility2.delete( { "abba": "dabba", [ schema2.primaryKey ]: testId[ schema2.primaryKey ] } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility2.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with extra fieldname and primary key', function() {
        return dbUtility2.delete( { "string": "test", [ schema2.primaryKey ]: testId[ schema2.primaryKey ] } )
        .catch( function( error ) {
          expect( error ).to.be.an( 'error' );
          return dbUtility2.delete( testId )
          .then( function( data ) {
            expect(data).to.be.a('number');
            expect(data).to.be.deep.equal(1);
          } );
        } );
      } );
      it( 'with primary key in small', function() {
        return dbUtility2.delete( { [ schema2.primaryKey.toLowerCase() ]: testId[ schema2.primaryKey ] } )
        .then( function( data ) {
          expect(data).to.be.a('number');
          expect(data).to.be.deep.equal(1);
        } );
      } );
    } );
  } );

} );