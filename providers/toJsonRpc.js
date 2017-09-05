/**
 * Convert to JSON-RPC json using some lib-level magic
 *
 * @param {*} payload
 * @return {string}
 */
export default function toJsonRpc(payload) {
  if (Array.isArray(payload)) {
    return JSON.stringify(payload.map(el => {
      return toJsonRpc(el);
    }));
  }

  if (typeof payload.toJsonRpc === 'function') {
    return payload.toJsonRpc();
  }

  return payload.toString();
}
