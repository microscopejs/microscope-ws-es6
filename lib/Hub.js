"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// Imports

// Hub class.

var Hub = (function () {

	// life cycle
	// constructor

	function Hub(io, socket) {
		_classCallCheck(this, Hub);

		this.io = io;
		this.socket = socket;
		this._parseRoute();
	}

	_createClass(Hub, {
		namespace: {

			// default prototype namespace

			value: function namespace() {
				return "/";
			}
		},
		routes: {

			// getter for routing object

			get: function () {
				return {};
			}
		},
		_parseRoute: {

			// private
			// parse routing

			value: function _parseRoute() {
				for (var route in this.routes) {
					this.socket.on(route, this.routes[route].bind(this));
				}
			}
		},
		emit: {

			// emit message to socket

			value: function emit(key, obj) {
				this.socket.emit(key, obj);
			}
		},
		emitToRoom: {

			// emit message to socket in room

			value: function emitToRoom(room, key, obj) {
				this.socket.to(room).emit(key, obj);
			}
		},
		broadcast: {

			// broadcast message to all socket in namespace

			value: function broadcast(key, obj) {
				this.io.of(this.namespace()).emit(key, obj);
			}
		},
		broadcastToAll: {

			// broadcast message to all socket connected

			value: function broadcastToAll(key, obj) {
				this.io.sockets.emit(key, obj);
			}
		}
	});

	return Hub;
})();

module.exports = Hub;