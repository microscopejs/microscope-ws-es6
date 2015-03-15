// Imports
var Hub = require('../../src/Hub');

class HomeHub extends Hub {

	static namespace(){
		return '/home';
	}

	get routes(){
		return {
			'send': this.handleMessage
		};
	}

	handleMessage(model){
		this.broadcast('sended', model);
	}
}

module.exports = HomeHub;