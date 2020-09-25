"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Notification = /*#__PURE__*/function () {
  /**
   * @param {object} payload
   */
  function Notification(payload) {
    _classCallCheck(this, Notification);

    this.jsonrpc = '2.0';

    if (!payload.method) {
      throw Error('No method specified for request');
    }
    /**
     * @type {string}
     */


    this.method = payload.method;

    if (payload.params) {
      /**
       * @type {object|array}
       */
      this.params = payload.params;
    }
  }
  /**
   * Get rpc method
   *
   * @return {string}
   */


  _createClass(Notification, [{
    key: "getMethod",
    value: function getMethod() {
      return this.method;
    }
    /**
     * @return {object|array}
     */

  }, {
    key: "getParams",
    value: function getParams() {
      return this.params;
    }
  }]);

  return Notification;
}();

exports.default = Notification;