import Error from './Error';

export default class JsonRpcError extends Error {
  static invalidRequest({ id, data }) {
    return new JsonRpcError({
      id, error: { message: 'Invalid request', code: -32600, data }
    });
  }

  static methodNotFound({ id, data }) {
    return new JsonRpcError({
      id, error: { message: 'Method not found', code: -32601, data }
    });
  }

  static invalidParams({ id, data }) {
    return new JsonRpcError({
      id, error: { message: 'Invalid params', code: -32602, data }
    });
  }

  static internalError({ id, data }) {
    return new JsonRpcError({
      id, error: { message: 'Internal error', code: -32603, data }
    });
  }

  static parseError({ id, data }) {
    return new JsonRpcError({
      id, error: { message: 'Parse error', code: -32700, data }
    });
  }
}
