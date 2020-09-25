export default class Error {
  constructor(payload) {
    this.jsonrpc = '2.0';
    /**
     * @type {string}
     */
    this.id = payload.id || null;

    /**
     * @type {{}}
     */
    this.error = payload.error;
  }

  /**
   * @return {string}
   */
  getId() {
    return this.id;
  }

  /**
   * @return {{}}
   */
  getError() {
    return this.error;
  }

  /**
   * @return {int}
   */
  getCode() {
    return this.error.code;
  }

  /**
   * @return {string}
   */
  getMessage() {
    return this.error.message;
  }

  /**
   * @return {data}
   */
  getData() {
    return this.error.data;
  }
}
