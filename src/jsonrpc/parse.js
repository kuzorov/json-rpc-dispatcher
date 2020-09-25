import JsonRpcError from './response/JsonRpcError';
import Request from './request/Request';
import Notification from './request/Notification';
import Success from './response/Success';
import Error from './response/Error';

/**
 * Parse message as json rpc error
 *
 * @param {*} message
 * @return {JsonRpcError|Request|Notification|Success|Error|Array<JsonRpcError|Request|Notification|Success|Error>}
 */
export default function parse(message) {
  if (!message) {
    return JsonRpcError.parseError({ data: 'Cannot parse undefined' });
  }

  if (typeof message === 'string') {
    try {
      message = JSON.parse(message);
    } catch (error) {
      return JsonRpcError.parseError({ data: error });
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

  return jsonRpc.map((object) => parseObject(object));
}

/**
 * @param {Object} object
 * @return {JsonRpcError|Success|Error|Request|Notification}
 */
function parseObject(object) {
  if (!object.method && !object.result && !object.error) {
    return JsonRpcError.internalError({
      id: object.id,
      data: 'No method, result or error attributes found. Not Json Rpc 2 object'
    });
  }
  if (object.method && (object.result || object.error)) {
    return JsonRpcError.internalError({
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
    return new Request(object);
  }

  return new Notification(object);
}

/**
 * @param {Object} object
 * @return {JsonRpcError|Error|Success}
 */
function parseResponse(object) {
  if (object.result && object.error) {
    return JsonRpcError.internalError({
      id: object.id,
      data: 'Result and error attributes found. Not valid Json Rpc 2 response object'
    });
  }

  if (object.result) {
    return new Success(object);
  }

  if (
    (object.error.code >= -32000 && object.error.code <= -32099) ||
    [-32700, -32600, -32601, -32602, -32603].includes(object.error.code)
  ) {
    return new JsonRpcError(object);
  }

  return new Error(object);
}
