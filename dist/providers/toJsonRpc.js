'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toJsonRpc;
/**
 * Convert to JSON-RPC json using some lib-level magic
 *
 * @param {*} payload
 * @return {string}
 */
function toJsonRpc(payload) {
  if (Array.isArray(payload)) {
    return JSON.stringify(payload.map(function (el) {
      return toJsonRpc(el);
    }));
  }

  if (typeof payload.toJsonRpc === 'function') {
    return payload.toJsonRpc();
  }

  return payload.toString();
}