"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SocketIo = /*#__PURE__*/function () {
  /**
   *
   * @param {io} socket
   */
  function SocketIo(socket) {
    _classCallCheck(this, SocketIo);

    this.socket = socket;
  }
  /**
   * Send request to server
   *
   * @param {string} payload
   *
   * @return {Promise}
   */


  _createClass(SocketIo, [{
    key: "request",
    value: function request(payload) {
      var _this = this;

      var id = (0, _uuid.v4)();
      this.socket.emit('request', JSON.stringify(payload));
      return new Promise(function (resolve) {
        _this.socket.on("response.".concat(id), function (data) {
          resolve(data);
        });
      });
    }
    /**
     * Send notification to server
     *
     * @param {string} payload
     *
     * @return {Promise}
     */

  }, {
    key: "notify",
    value: function notify(payload) {
      this.socket.emit('request', JSON.stringify(payload));
      return Promise.resolve();
    }
  }]);

  return SocketIo;
}();

exports.default = SocketIo;