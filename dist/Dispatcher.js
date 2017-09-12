'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Fetch = require('./adapters/Fetch');

var _Fetch2 = _interopRequireDefault(_Fetch);

var _responseFactory = require('./providers/responseFactory');

var _responseFactory2 = _interopRequireDefault(_responseFactory);

var _toJsonRpc = require('./providers/toJsonRpc');

var _toJsonRpc2 = _interopRequireDefault(_toJsonRpc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dispatcher = function () {
  /**
   *
   * @param {object} adapter
   */
  function Dispatcher(adapter) {
    _classCallCheck(this, Dispatcher);

    this.adapter = adapter;
  }

  /**
   * Request
   *
   * @param payload
   * @return {*|Promise.<TResult>}
   */


  _createClass(Dispatcher, [{
    key: 'request',
    value: function request(payload) {
      return this.getAdapter().request((0, _toJsonRpc2.default)(payload), payload.getId()).then(function (res) {
        return (0, _responseFactory2.default)(payload, res);
      }, function (res) {
        return (0, _responseFactory2.default)(payload, res);
      });
    }

    /**
     * Notification
     *
     * @param payload
     */

  }, {
    key: 'notify',
    value: function notify(payload) {
      return this.getAdapter().notify((0, _toJsonRpc2.default)(payload)).catch(function (res) {
        return (0, _responseFactory2.default)(payload, res);
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
    key: 'requestUrl',
    value: function requestUrl(payload, url) {
      if (!this.getAdapter() instanceof _Fetch2.default) {
        throw 'Only Fetch adapter supports requestUrl method';
      }

      var adapter = Object.assign(Object.create(this.getAdapter()), this.getAdapter(), { url: url });

      return adapter.request((0, _toJsonRpc2.default)(payload)).then(function (res) {
        return (0, _responseFactory2.default)(payload, res);
      }, function (res) {
        return (0, _responseFactory2.default)(payload, res);
      });
    }

    /**
     * Notify to specified url
     *
     * @param url
     * @param payload
     * @return {*|Promise.<TResult>}
     */

  }, {
    key: 'notifyUrl',
    value: function notifyUrl(payload, url) {
      if (!this.getAdapter() instanceof _Fetch2.default) {
        throw 'Only Fetch adapter supports notifyUrl method';
      }

      var adapter = Object.assign(Object.create(this.getAdapter()), this.getAdapter(), { url: url });

      return adapter.notify((0, _toJsonRpc2.default)(payload)).catch(function (res) {
        return (0, _responseFactory2.default)(payload, res);
      });
    }

    /**
     * Get adapter
     *
     * @return {*}
     */

  }, {
    key: 'getAdapter',
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
    key: 'setAdapter',
    value: function setAdapter(adapter) {
      this.adapter = adapter;

      return this;
    }
  }]);

  return Dispatcher;
}();

exports.default = Dispatcher;