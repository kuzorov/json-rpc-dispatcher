"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Success =
/*#__PURE__*/
function () {
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
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @return {*}
     */

  }, {
    key: "getResult",
    value: function getResult() {
      return this.result;
    }
    /**
     * Get contents of result.headers
     *
     * @return {string|Headers}
     */

  }, {
    key: "getHeaders",
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
    key: "getPayload",
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

  return Success;
}();

exports.default = Success;