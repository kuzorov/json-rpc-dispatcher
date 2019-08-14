"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Request =
/*#__PURE__*/
function () {
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
   * Get rpc method
   *
   * @return {string}
   */


  _createClass(Request, [{
    key: "getMethod",
    value: function getMethod() {
      return this.method;
    }
    /**
     * Get request id
     *
     * @return {string}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * Convert to JSON-RPC compatible string
     */

  }, {
    key: "toJsonRpc",
    value: function toJsonRpc() {
      return JSON.stringify(_objectSpread({
        jsonrpc: '2.0'
      }, this));
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.toJsonRpc();
    }
  }]);

  return Request;
}();

exports.default = Request;