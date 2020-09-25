export default class Notification {
  /**
   * @param {object} payload
   */
  constructor(payload) {
    this.jsonrpc = '2.0';
    if (!payload.method) {
      throw Error('No method specified for request');
    }

    /**
     * @type {string}
     */
    this.method = payload.method;

    if (payload.params) {
      /**
       * @type {object|array}
       */
      this.params = payload.params;
    }
  }

  /**
   * Get rpc method
   *
   * @return {string}
   */
  getMethod() {
    return this.method;
  }

  /**
   * @return {object|array}
   */
  getParams() {
    return this.params;
  }
}
