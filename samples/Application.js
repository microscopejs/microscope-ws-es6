var fs            = require('fs');
var path          = require('path');
var http          = require('http');
var WsApplication = require('../src/WsApplication');
var HomeHubs      = require('./hubs/HomeHubs');

// Application
class Application extends WsApplication {

	get hubs(){
		return [ HomeHubs ];
	}
}

// create simple http server and serve html file.
var server = http.createServer(function (request, response) {
	var filePath = path.join(__dirname + '/index.html');
	fs.readFile(filePath, function (err, html) {
		if (err) { throw err; }
		response.writeHeader(200, {"Content-Type": "text/html"});
		response.end(html);
	});
});

// create microscope WsApplication attach to server
var application = new Application(server);

//run server
server.listen(3000);
console.log('application running at port 3000');