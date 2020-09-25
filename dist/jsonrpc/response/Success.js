"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Success = /*#__PURE__*/function () {
  function Success(payload) {
    _classCallCheck(this, Success);

    this.jsonrpc = '2.0';
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
      return this.result.payload;
    }
  }]);

  return Success;
}();

exports.default = Success;