// Imports
var WsApplication = require('../src/WsApplication');
var HomeHubs      = require('./hubs/HomeHubs');

// WebSocket Application class
class Application extends WsApplication {

	// getter for hubs array
	get hubs(){
		return [ HomeHubs ];
	}
}

module.exports = Application;