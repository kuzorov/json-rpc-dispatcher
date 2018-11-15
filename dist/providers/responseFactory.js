'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = responseFactory;

var _Error = require('./../rpc/response/Error');

var _Error2 = _interopRequireDefault(_Error);

var _JsonRpcError = require('./../rpc/response/JsonRpcError');

var _JsonRpcError2 = _interopRequireDefault(_JsonRpcError);

var _Success = require('./../rpc/response/Success');

var _Success2 = _interopRequireDefault(_Success);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function responseFactory(req, res) {
  try {
    if ((typeof res === 'undefined' ? 'undefined' : _typeof(res)) !== 'object') {
      res = JSON.parse(res);
    }

    if (Array.isArray(res)) {
      res = res.map(function (payload) {
        return getResponseObj(payload);
      });

      return sortRes(req, res);
    }

    return getResponseObj(res);
  } catch (e) {
    return new _JsonRpcError2.default({ id: null, error: { code: -32603, message: 'Error while processing response', data: e } });
  }
}

/**
 * Sort response according to batch request order
 *
 * @param {Array} req
 * @param {Array} res
 *
 * @return {Array}
 */
function sortRes(req, res) {
  var sorted = [];

  for (var i = 0; i < req.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (req[i] && res[j] && req[i].id == res[j].id) {
        sorted.push(res[j]);
        delete req[i];
        delete res[j];
      }
    }
  }

  return sorted;
}

/**
 * Get response object
 *
 * @param res
 * @return {*}
 */
function getResponseObj(res) {
  if (res && 'result' in res) {
    return new _Success2.default(res);
  }
  if (res.error) {
    if (res.error.code > -32768 && res.error.code < -32000) {
      return new _JsonRpcError2.default(res);
    }

    return new _Error2.default(res);
  }

  return new _JsonRpcError2.default({
    id: null,
    error: { code: -32603, message: 'Error while processing response', data: res }
  });
}