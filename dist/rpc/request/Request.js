'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = require('uuid');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Request = function () {
  /**
   * @param {object} payload
   */
  function Request(payload) {
    _classCallCheck(this, Request);

    if (!payload.id && payload.id !== null) {
      payload.id = (0, _uuid.v4)();
    }
    if (!payload.method) {
      throw Error('No method specified for request');
    }

    /**
     * @type {string}
     */
    this.id = payload.id;

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
   * Get request id
   *
   * @return {string}
   */


  _createClass(Request, [{
    key: 'getId',
    value: function getId() {
      return this.id;
    }

    /**
     * Convert to JSON-RPC compatible string
     */

  }, {
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

  return Request;
}();

exports.default = Request;