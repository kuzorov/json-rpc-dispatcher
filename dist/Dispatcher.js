"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Fetch = _interopRequireDefault(require("./adapters/Fetch"));

var _responseFactory = _interopRequireDefault(require("./providers/responseFactory"));

var _toJsonRpc = _interopRequireDefault(require("./providers/toJsonRpc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dispatcher =
/*#__PURE__*/
function () {
  /**
   *
   * @param {object} adapter
   */
  function Dispatcher(adapter) {
    _classCallCheck(this, Dispatcher);

    this.adapter = adapter;
    this.requestInterceptors = [];
    this.responseInterceptors = [];
  }
  /**
   * Request
   *
   * @param payload
   * @return {*|Promise.<TResult>}
   */


  _createClass(Dispatcher, [{
    key: "request",
    value: function request(payload) {
      var _this = this;

      payload = this.execRequestInterceptors(payload);
      return this.getAdapter().request((0, _toJsonRpc.default)(payload), payload.getId(), payload.getMethod()).then(function (res) {
        return _this.execResponseInterceptors((0, _responseFactory.default)(payload, res), payload);
      }, function (res) {
        return _this.execResponseInterceptors((0, _responseFactory.default)(payload, res), payload);
      });
    }
    /**
     * Notification
     *
     * @param payload
     */

  }, {
    key: "notify",
    value: function notify(payload) {
      return this.getAdapter().notify((0, _toJsonRpc.default)(payload), payload.getMethod()).catch(function (res) {
        return (0, _responseFactory.default)(payload, res);
      });
    }
    /**
     * Request to specified url
     *
     * @param url
     * @param {Array|object} payload
     * @return {*|Promise.<TResult>}
     */

  }, {
    key: "requestUrl",
    value: function requestUrl(payload, url) {
      var _this2 = this;

      if (!this.getAdapter() instanceof _Fetch.default) {
        throw 'Only Fetch adapter supports requestUrl method';
      }

      var adapter = Object.assign(Object.create(this.getAdapter()), this.getAdapter(), {
        url: url
      });
      payload = this.execRequestInterceptors(payload);
      return adapter.request((0, _toJsonRpc.default)(payload), payload.getId(), payload.getMethod()).then(function (res) {
        return _this2.execResponseInterceptors((0, _responseFactory.default)(payload, res), payload);
      }, function (res) {
        return _this2.execResponseInterceptors((0, _responseFactory.default)(payload, res), payload);
      });
    }
    /**
     * Add interceptor before request
     *
     * @param {function} callback
     * @return {Dispatcher}
     */

  }, {
    key: "interceptRequest",
    value: function interceptRequest(callback) {
      if (typeof callback !== 'function') {
        throw 'Interceptor must be a function';
      }

      this.requestInterceptors.push(callback);
      return this;
    }
    /**
     * Notify to specified url
     *
     * @param url
     * @param payload
     * @return {*|Promise.<TResult>}
     */

  }, {
    key: "notifyUrl",
    value: function notifyUrl(payload, url) {
      if (!this.getAdapter() instanceof _Fetch.default) {
        throw 'Only Fetch adapter supports notifyUrl method';
      }

      var adapter = Object.assign(Object.create(this.getAdapter()), this.getAdapter(), {
        url: url
      });
      return adapter.notify((0, _toJsonRpc.default)(payload), payload.getMethod()).catch(function (res) {
        return (0, _responseFactory.default)(payload, res);
      });
    }
    /**
     * Add interceptor before response
     *
     * @param {function} callback
     * @return {Dispatcher}
     */

  }, {
    key: "interceptResponse",
    value: function interceptResponse(callback) {
      if (typeof callback !== 'function') {
        throw 'Interceptor must be a function';
      }

      this.responseInterceptors.push(callback);
      return this;
    }
    /**
     * Delete interceptor before response
     *
     * @param {function} callback
     * @return {Dispatcher}
     */

  }, {
    key: "deleteRequestInterceptor",
    value: function deleteRequestInterceptor(callback) {
      this.requestInterceptors = this.requestInterceptors.filter(function (el) {
        return el !== callback;
      });
      return this;
    }
    /**
     * Delete interceptor before response
     *
     * @param {function} callback
     * @return {Dispatcher}
     */

  }, {
    key: "deleteResponseInterceptor",
    value: function deleteResponseInterceptor(callback) {
      this.requestInterceptors = this.responseInterceptors.filter(function (el) {
        return el !== callback;
      });
      return this;
    }
    /**
     * Exec request interceptors
     *
     * @param {object} payload
     * @return {object}
     * @private
     */

  }, {
    key: "execRequestInterceptors",
    value: function execRequestInterceptors(payload) {
      if (!this.requestInterceptors.length) {
        return payload;
      }

      this.requestInterceptors.forEach(function (callback) {
        return payload = callback(payload);
      });
      return payload;
    }
    /**
     * Exec response interceptors
     *
     * @param {object} response
     * @param {object} payload
     * @return {object}
     * @private
     */

  }, {
    key: "execResponseInterceptors",
    value: function execResponseInterceptors(response, payload) {
      if (!this.responseInterceptors.length) {
        return response;
      }

      this.responseInterceptors.forEach(function (callback) {
        return response = callback(response, payload);
      });
      return response;
    }
    /**
     * Get adapter
     *
     * @return {*}
     */

  }, {
    key: "getAdapter",
    value: function getAdapter() {
      if (!this.adapter) {
        throw 'Adapter is not set';
      }

      return this.adapter;
    }
    /**
     * Set adapter
     *
     * @param {object} adapter
     * @return {Dispatcher}
     */

  }, {
    key: "setAdapter",
    value: function setAdapter(adapter) {
      this.adapter = adapter;
      return this;
    }
  }]);

  return Dispatcher;
}();

exports.default = Dispatcher;