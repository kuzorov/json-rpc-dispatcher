import Error from './Error';

export default class JsonRpcError extends Error {
  static invalidRequest({ id, data }) {
    return new JsonRpcError({
      id, error: { message: 'Invalid request', code: -32600, data }
    });
  }

  static methodNotFound({ id, data }) {
    return new JsonRpcError({
      id, error: { message: 'Invalid request', code: -32601, data }
    });
  }

  static invalidParams({ id, data }) {
    return new JsonRpcError({
      id, error: { message: 'Invalid request', code: -32602, data }
    });
  }

  static internalError({ id, data }) {
    return new JsonRpcError({
      id, error: { message: 'Invalid request', code: -32603, data }
    });
  }

  static parseError({ id, data }) {
    return new JsonRpcError({
      id, error: { message: 'Invalid request', code: -32700, data }
    });
  }
}
