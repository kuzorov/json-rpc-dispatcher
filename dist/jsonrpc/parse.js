"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

var _JsonRpcError = _interopRequireDefault(require("./response/JsonRpcError"));

var _Request = _interopRequireDefault(require("./request/Request"));

var _Notification = _interopRequireDefault(require("./request/Notification"));

var _Success = _interopRequireDefault(require("./response/Success"));

var _Error = _interopRequireDefault(require("./response/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parse message as json rpc error
 *
 * @param {*} message
 * @return {JsonRpcError|Request|Notification|Success|Error|Array<JsonRpcError|Request|Notification|Success|Error>}
 */
function parse(message) {
  if (!message) {
    return _JsonRpcError.default.parseError({
      data: 'Cannot parse undefined'
    });
  }

  if (typeof message === 'string') {
    try {
      message = JSON.parse(message);
    } catch (error) {
      return _JsonRpcError.default.parseError({
        data: error
      });
    }
  }

  return parseJsonRpc(message);
}
/**
 * @param {Object|Array} jsonRpc
 * @return {JsonRpcError|Request|Notification|Success|Error|[JsonRpcError|Request|Notification|Success|Error]}
 */


function parseJsonRpc(jsonRpc) {
  if (!Array.isArray(jsonRpc)) {
    return parseObject(jsonRpc);
  }

  return jsonRpc.map(function (object) {
    return parseObject(object);
  });
}
/**
 * @param {Object} object
 * @return {JsonRpcError|Success|Error|Request|Notification}
 */


function parseObject(object) {
  if (!object.method && !object.result && !object.error) {
    return _JsonRpcError.default.internalError({
      id: object.id,
      data: 'No method, result or error attributes found. Not Json Rpc 2 object'
    });
  }

  if (object.method && (object.result || object.error)) {
    return _JsonRpcError.default.internalError({
      id: object.id,
      data: 'Method, and result or error attributes found. Not valid Json Rpc 2 object'
    });
  }

  if (object.method) {
    return parseRequest(object);
  }

  return parseResponse(object);
}
/**
 * @param {Object} object
 * @return {Request|Notification}
 */


function parseRequest(object) {
  if ('id' in object) {
    return new _Request.default(object);
  }

  return new _Notification.default(object);
}
/**
 * @param {Object} object
 * @return {JsonRpcError|Error|Success}
 */


function parseResponse(object) {
  if (object.result && object.error) {
    return _JsonRpcError.default.internalError({
      id: object.id,
      data: 'Result and error attributes found. Not valid Json Rpc 2 response object'
    });
  }

  if (object.result) {
    return new _Success.default(object);
  }

  if (object.error.code >= -32000 && object.error.code <= -32099 || [-32700, -32600, -32601, -32602, -32603].includes(object.error.code)) {
    return new _JsonRpcError.default(object);
  }

  return new _Error.default(object);
}