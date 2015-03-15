"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// Imports

// WebSocket application.

var WsApplication = (function () {
	function WsApplication() {
		_classCallCheck(this, WsApplication);
	}

	_createClass(WsApplication, {
		hubs: {
			get: function () {
				return [];
			}
		},
		onConnection: {
			value: function onConnection() {}
		},
		onDisconnect: {
			value: function onDisconnect() {}
		}
	});

	return WsApplication;
})();

module.exports = WsApplication;