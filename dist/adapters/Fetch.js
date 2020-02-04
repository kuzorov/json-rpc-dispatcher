"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fetch =
/*#__PURE__*/
function () {
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
      options.headers = {};
    }

    if (!options.headers['Content-Type']) {
      options.headers['Content-Type'] = 'application/json';
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
   * @param {?string} method
   *
   * @return {Promise}
   */


  _createClass(Fetch, [{
    key: "request",
    value: function request(payload) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _uuid.default)();
      var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (method) {
        this.options.headers['X-JsonRpc-Method'] = method;
      }

      return fetch(this.url, _objectSpread({
        body: payload
      }, this.options)).then(function (data) {
        return data.json();
      });
    }
    /**
     * Send notification to server
     *
     * @param {?string} method
     * @param {string} payload
     */

  }, {
    key: "notify",
    value: function notify(payload) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (method) {
        this.options.headers['X-JsonRpc-Method'] = method;
      }

      return fetch(this.url, _objectSpread({
        body: payload
      }, this.options));
    }
  }]);

  return Fetch;
}();

exports.default = Fetch;