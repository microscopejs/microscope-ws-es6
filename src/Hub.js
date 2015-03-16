// Imports

// Hub class.
class Hub {

	// life cycle
	// constructor
	constructor(io, socket){
		this.io     = io;
		this.socket = socket;
		this._parseRoute();
	}

	// default prototype namespace
	namespace(){
		return '/';
	}

	// getter for routing object
	get routes(){
		return {};
	}

	// private
	// parse routing
	_parseRoute(){
		for(let route in this.routes){
			this.socket.on(route, this.routes[route].bind(this));
		}
	}

	// emit message to socket
	emit(key, obj) {
		this.socket.emit(key, obj);
	}

	// emit message to socket in room
	emitToRoom(room, key, obj) {
		this.socket.to(room).emit(key, obj);
	}

	// broadcast message to all socket in namespace
	broadcast(key, obj) {
		this.io.of(this.namespace()).emit(key, obj);
	}

	// broadcast message to all socket connected
	broadcastToAll(key, obj) {
		this.io.sockets.emit(key, obj);
	}
}

module.exports = Hub;