// Imports
var IO = require('socket.io');

// WebSocket application.
class WsApplication {

	// constructor
	// options
	constructor(httpServer){
		if(!httpServer){ 
			throw new Error('WsApplication require constructor with http server object');
		}

		this.server = httpServer;
		this.io = IO(this.server);
		this._registerHubs();
	}

	// return list of hubs
	get hubs(){
		return [];
	}

	// register WsApplication hub
	_registerHubs(){
		for(let Hub of this.hubs){
			this.io.of(Hub.prototype.namespace()).on('connection', (socket) => {
				this.onConnection(Hub.prototype.namespace());
				new Hub(this.io, socket);
				socket.on('disconnect', this.onDisconnect.bind(this, Hub.prototype.namespace()));
			});
		}
	}

	// 
	onConnection(namespace){
		console.log('user connected to namespace : ' + namespace);
	}

	// 
	onDisconnect(namespace){
		console.log('user disconnected from namespace : ' + namespace);
	}
}

module.exports = WsApplication;