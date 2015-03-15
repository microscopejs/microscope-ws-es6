// Imports

// Hub class.
class Hub {

	constructor(namespace, io, socket){
		this.namespace = namespace;
		this.io        = io;
		this.socket    = socket;
		this._parseRoute();
	}

	static namespace(){
		return '/';
	}

	get routes(){
		return {};
	}

	_parseRoute(){
		for(let route in this.routes){
			this.socket.on(route, this.routes[route].bind(this));
		}
	}

	emit(key, obj) {
		this.socket.emit(key, obj);
	}

	emitToRoom(room, key, obj) {
		this.socket.to(room).emit(key, obj);
	}

	broadcast(key, obj) {
		this.io.of(this.namespace).emit(key, obj);
	}

	broadcastToAll(key, obj) {
		this.io.sockets.emit(key, obj);
	}
}

module.exports = Hub;