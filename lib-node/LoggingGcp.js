var google = require( 'googleapis' );

var projectId;
var service;
var logging;


(function authenticate() {
  google.auth.getApplicationDefault( ( err, authClient ) => {
    if (err) {
      console.log( 'Failed to get the default credentials: ' + String( err ) );
      setTimeout( authenticate, 15 * 1000 );
    }
    if ( authClient.createScopedRequired && authClient.createScopedRequired() ) {
      authClient = authClient.createScoped( [ 'https://www.googleapis.com/auth/logging.write' ] );
    }
    logging = google.logging( { version: 'v2beta1', auth: authClient } );
  });
})();



class LoggingGcp {

  constructor( request ) {

    this.logEntry = {
      logName: `projects/${ projectId }/logs/${ service }`,
      resource: { type: 'container' },
      entries: [{
        timestamp: this.getDate(),
        protoPayload: {
          '@type': 'type.googleapis.com/google.appengine.logging.v1.RequestLog',
          line: []
        }
      }]
    };

    if( typeof request === 'object' ) {
      var payload = this.logEntry.entries[0].protoPayload;
      payload.method = request.method;
      payload.resource = request.url;
      payload.userAgent = request.headers[ 'user-agent' ];
      payload.ip = request.ip;
      this.logEntry.labels = { requestId: request.headers[ 'x-request-id' ] };
    } else {
      this.logEntry.labels = { requestId: request };
    }

  }


  static init( config ) {
    projectId = config.projectId;
    service = config.service;
    return this;
  }


  info( message ) {
    this.addLine( 200, message );
  }

  error( message ) {
    this.addLine( 500, message );
  }

  addLine( severity, logMessage ) {
    this.logEntry.entries[0].protoPayload.line.push({
      severity: severity,
      logMessage: logMessage,
      time: this.getDate()
    });
  }

  setResource( resource ) {
    this.logEntry.entries[0].protoPayload.resource = resource;
  }

  setUserAgent( userAgent ) {
    this.logEntry.entries[0].protoPayload.userAgent = userAgent;
  }


  submit( status, responseSize ) {
    if( logging ) {
      var entry = this.logEntry.entries[0];
      var payload = entry.protoPayload;
      payload.status = status;
      payload.responseSize = responseSize;
      payload.latency = ( new Date().getTime() - new Date( entry.timestamp ) ) / 1000 + 's';

      entry.severity = this.getSeverity( entry );

      logging.entries.write({ resource: this.logEntry }, ( err, result ) => {
        if( err ) {
          console.error( String( err ) );
        }
      });
    } else {
      var self = this;
      setTimeout( () => {
        self.submit();
      }, 15000 ); // retry after 15 seconds
    }
  }


  getDate() {
    return new Date().toISOString();
  }

  getSeverity( entry ) {
    var severityArray = entry.protoPayload.line.map( function( line ) {
      return line.severity;
    });
    return Math.max( ...severityArray );
  }

}

module.exports = LoggingGcp;
