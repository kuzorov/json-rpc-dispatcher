'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Success = function () {
  function Success(payload) {
    _classCallCheck(this, Success);

    /**
     * @type {string}
     */
    this.id = payload.id;

    /**
     * {*}
     */
    this.result = payload.result;
  }

  /**
   * @return {string}
   */


  _createClass(Success, [{
    key: 'getId',
    value: function getId() {
      return this.id;
    }

    /**
     * @return {*}
     */

  }, {
    key: 'getResult',
    value: function getResult() {
      return this.result;
    }

    /**
     * Get contents of result.headers
     *
     * @return {string|Headers}
     */

  }, {
    key: 'getHeaders',
    value: function getHeaders() {
      if (!this.result.headers) {
        throw 'There are no headers attribute in current response';
      }

      return this.result.headers;
    }

    /**
     * Get contents of result.payload
     *
     * @return {*}
     */

  }, {
    key: 'getPayload',
    value: function getPayload() {
      if (!this.result.payload) {
        throw 'There are no payload attribute in current response';
      }

      return this.result.payload;
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

  return Success;
}();

exports.default = Success;