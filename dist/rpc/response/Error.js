'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Error = function () {
  function Error(payload) {
    _classCallCheck(this, Error);

    /**
     * @type {string}
     */
    this.id = payload.id;

    /**
     * @type {{}}
     */
    this.error = {};
    /**
     * @type {int}
     */
    this.error.code = payload.error.code;

    /**
     * @type {string}
     */
    this.error.message = payload.error.message;

    /**
     * {*}
     */
    this.error.data = payload.error.data;
  }

  /**
   * @return {string}
   */


  _createClass(Error, [{
    key: 'getId',
    value: function getId() {
      return this.id;
    }

    /**
     * @return {{}}
     */

  }, {
    key: 'getError',
    value: function getError() {
      return this.error;
    }

    /**
     * @return {int}
     */

  }, {
    key: 'getCode',
    value: function getCode() {
      return this.error.code;
    }

    /**
     * @return {string}
     */

  }, {
    key: 'getMessage',
    value: function getMessage() {
      return this.error.message;
    }

    /**
     * @return {data}
     */

  }, {
    key: 'getData',
    value: function getData() {
      return this.error.data;
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

  return Error;
}();

exports.default = Error;