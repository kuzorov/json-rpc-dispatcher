'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fetch = function () {
  /**
   *
   * @param {string} url
   * @param {Object} options
   */
  function Fetch() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Fetch);

    if (!options.method) {
      options.method = 'POST';
    }
    if (!options.headers) {
      options.headers = { 'Content-Type': 'application/json' };
    }
    if (!options.credentials) {
      options.credentials = 'include';
    }

    this.options = options;
    this.url = url;
  }

  /**
   * Send request to server
   *
   * @param {string} payload
   * @param {string} id
   *
   * @return {Promise}
   */


  _createClass(Fetch, [{
    key: 'request',
    value: function request(payload) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _uuid2.default)();

      return fetch(this.url, _extends({ body: payload }, this.options)).then(function (data) {
        return data.json();
      });
    }

    /**
     * Send notification to server
     *
     * @param {string} payload
     */

  }, {
    key: 'notify',
    value: function notify(payload) {
      return fetch(this.url, _extends({ body: payload }, this.options));
    }
  }]);

  return Fetch;
}();

exports.default = Fetch;