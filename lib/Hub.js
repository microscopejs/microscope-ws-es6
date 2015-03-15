"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// Imports

// Hub class.

var Hub = (function () {
	function Hub(namespace, io, socket) {
		_classCallCheck(this, Hub);

		this.namespace = namespace;
		this.io = io;
		this.socket = socket;
		this._parseRoute();
	}

	_createClass(Hub, {
		routes: {
			get: function () {
				return {};
			}
		},
		_parseRoute: {
			value: function _parseRoute() {
				for (var route in this.routes) {
					this.socket.on(route, this.routes[route].bind(this));
				}
			}
		},
		emit: {
			value: function emit(key, obj) {
				this.socket.emit(key, obj);
			}
		},
		emitToRoom: {
			value: function emitToRoom(room, key, obj) {
				this.socket.to(room).emit(key, obj);
			}
		},
		broadcast: {
			value: function broadcast(key, obj) {
				this.io.of(this.namespace).emit(key, obj);
			}
		},
		broadcastToAll: {
			value: function broadcastToAll(key, obj) {
				this.io.sockets.emit(key, obj);
			}
		}
	}, {
		namespace: {
			value: function namespace() {
				return "/";
			}
		}
	});

	return Hub;
})();

module.exports = Hub;