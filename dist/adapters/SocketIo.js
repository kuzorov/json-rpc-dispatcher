'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketIo = function () {
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
   * @param {string} id
   *
   * @return {Promise}
   */


  _createClass(SocketIo, [{
    key: 'request',
    value: function request(payload) {
      var _this = this;

      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _uuid2.default)();

      this.socket.emit('request', payload);

      return new Promise(function (resolve, reject) {
        _this.socket.on('response.' + id, function (data) {
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
    key: 'notify',
    value: function notify(payload) {
      this.socket.emit('request', payload);

      return Promise.resolve();
    }
  }]);

  return SocketIo;
}();

exports.default = SocketIo;