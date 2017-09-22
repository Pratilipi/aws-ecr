var fs = require('fs');

var service = require('./config.js');

var template = fs.readFileSync(`DashBoard.template`,'utf8');

for( var i = 0; i < service.length; i++ ) {
	var appName = service[ i ][ 0 ];
	var targetGroup = service[ i ][ 1 ];
	var loadBalancer = service[ i ][ 2 ];
	var name = service[ i ][ 3 ];
	var serviceDashboard = template.replace(/\$appName/g,appName);
	serviceDashboard = serviceDashboard.replace(/\$targetGroup/g,targetGroup);
	serviceDashboard = serviceDashboard.replace(/\$loadBalancer/g,loadBalancer);
	serviceDashboard = serviceDashboard.replace(/\$name/g,name);
	fs.writeFileSync(`DashBoard_${ appName }.json`,serviceDashboard,'utf8');
	if( i === 0 ) {
		fs.writeFileSync(`DashBoard.json`,serviceDashboard,'utf8');
	} else {
		var dashboard = fs.readFileSync(`DashBoard.json`,'utf8');
		var parsedDashboard = JSON.parse( dashboard );
		var parsedServiceDashboard = JSON.parse( serviceDashboard );
		parsedDashboard.widgets.push(...parsedServiceDashboard.widgets);
		fs.writeFileSync(`DashBoard.json`,JSON.stringify(parsedDashboard,null,2),'utf8');
	}
	
}

