"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = responseFactory;

var _Error = _interopRequireDefault(require("./../rpc/response/Error"));

var _JsonRpcError = _interopRequireDefault(require("./../rpc/response/JsonRpcError"));

var _Success = _interopRequireDefault(require("./../rpc/response/Success"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function responseFactory(req, res) {
  try {
    if (_typeof(res) !== 'object') {
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
    return new _JsonRpcError.default({
      id: null,
      error: {
        code: -32603,
        message: 'Error while processing response',
        data: e
      }
    });
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
    return new _Success.default(res);
  }

  if (res.error) {
    if (res.error.code > -32768 && res.error.code < -32000) {
      return new _JsonRpcError.default(res);
    }

    return new _Error.default(res);
  }

  return new _JsonRpcError.default({
    id: null,
    error: {
      code: -32603,
      message: 'Error while processing response',
      data: res
    }
  });
}