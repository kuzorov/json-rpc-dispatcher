"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Error = /*#__PURE__*/function () {
  function Error(payload) {
    _classCallCheck(this, Error);

    this.jsonrpc = '2.0';
    /**
     * @type {string}
     */

    this.id = payload.id || null;
    /**
     * @type {{}}
     */

    this.error = payload.error;
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
  }]);

  return Error;
}();

exports.default = Error;