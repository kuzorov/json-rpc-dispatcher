export default class Success {
  constructor(payload) {
    /**
     * @type {string}
     */
    this.id = payload.id;

    /**
     * {*}
     */
    this.result = payload.result;
  }

  /**
   * @return {string}
   */
  getId() {
    return this.id;
  }

  /**
   * @return {*}
   */
  getResult() {
    return this.result;
  }

  /**
   * Get contents of result.headers
   *
   * @return {string|Headers}
   */
  getHeaders() {
    if (!this.result.headers) {
      throw 'There are no headers attribute in current response';
    }

    return this.result.headers;
  }

  /**
   * Get contents of result.payload
   *
   * @return {*}
   */
  getPayload() {
    if (!this.result.payload) {
      throw 'There are no payload attribute in current response';
    }

    return this.result.payload;
  }

  /**
   * Convert to JSON-RPC compatible string
   */
  toJsonRpc() {
    return JSON.stringify({ jsonrpc: '2.0', ...this });
  }

  /**
   * @inheritDoc
   */
  toString() {
    return this.toJsonRpc();
  }
}
