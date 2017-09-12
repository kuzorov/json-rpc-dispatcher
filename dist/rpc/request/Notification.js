'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notification = function () {
  /**
   * @param {object} payload
   */
  function Notification(payload) {
    _classCallCheck(this, Notification);

    if (!payload.method) {
      throw Error('No method specified for request');
    }

    /**
     * @type {string}
     */
    this.method = payload.method;

    /**
     * @type {object|array}
     */
    this.params = payload.params;
  }

  /**
   * Convert to JSON-RPC compatible string
   */


  _createClass(Notification, [{
    key: 'toJsonRpc',
    value: function toJsonRpc() {
      return JSON.stringify(_extends({ jsonrpc: '2.0' }, this));
    }

    /**
     * @inheritDoc
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.toJsonRpc();
    }
  }]);

  return Notification;
}();

exports.default = Notification;