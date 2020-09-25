export default class Success {
  constructor(payload) {
    this.jsonrpc = '2.0';
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
    return this.result.headers;
  }

  /**
   * Get contents of result.payload
   *
   * @return {*}
   */
  getPayload() {
    return this.result.payload;
  }
}
