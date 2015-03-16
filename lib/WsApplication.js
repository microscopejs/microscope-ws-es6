"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// Imports
var IO = require("socket.io");

// WebSocket application.

var WsApplication = (function () {

	// constructor
	// options

	function WsApplication(httpServer) {
		_classCallCheck(this, WsApplication);

		if (!httpServer) {
			throw new Error("WsApplication require constructor with http server object");
		}

		this.server = httpServer;
		this.io = IO(this.server);
		this._registerHubs();
	}

	_createClass(WsApplication, {
		hubs: {

			// return list of hubs

			get: function () {
				return [];
			}
		},
		_registerHubs: {

			// register WsApplication hub

			value: function _registerHubs() {
				var _this = this;

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.hubs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						(function () {
							var Hub = _step.value;

							_this.io.of(Hub.prototype.namespace()).on("connection", function (socket) {
								_this.onConnection(Hub.prototype.namespace());
								new Hub(_this.io, socket);
								socket.on("disconnect", _this.onDisconnect.bind(_this, Hub.prototype.namespace()));
							});
						})();
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		},
		onConnection: {

			//

			value: function onConnection(namespace) {
				console.log("user connected to namespace : " + namespace);
			}
		},
		onDisconnect: {

			//

			value: function onDisconnect(namespace) {
				console.log("user disconnected from namespace : " + namespace);
			}
		}
	});

	return WsApplication;
})();

module.exports = WsApplication;