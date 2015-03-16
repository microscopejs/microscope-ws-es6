// Imports
var Hub = require('../../src/Hub');

// Home hub
class HomeHub extends Hub {

	// namespace prototype function
	// allow to isolate hub connection
	namespace(){
		return '/home';
	}

	// getter for hub inner routing
	get routes(){
		return {
			'send': this.handleMessage
		};
	}

	// hub action call for 'send' route
	handleMessage(model){
		this.broadcast('sended', model);
	}
}

module.exports = HomeHub;