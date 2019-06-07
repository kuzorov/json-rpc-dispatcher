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

var Error =
/*#__PURE__*/
function () {
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
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @return {{}}
     */

  }, {
    key: "getError",
    value: function getError() {
      return this.error;
    }
    /**
     * @return {int}
     */

  }, {
    key: "getCode",
    value: function getCode() {
      return this.error.code;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getMessage",
    value: function getMessage() {
      return this.error.message;
    }
    /**
     * @return {data}
     */

  }, {
    key: "getData",
    value: function getData() {
      return this.error.data;
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

  return Error;
}();

exports.default = Error;