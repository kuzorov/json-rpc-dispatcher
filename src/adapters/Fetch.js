export default class Fetch {
  /**
   *
   * @param {string} url
   * @param {Object} options
   */
  constructor(url = '/', options = {}) {
    if (!options.method) {
      options.method = 'POST';
    }
    if (!options.headers) {
      options.headers = {};
    }
    if (!options.headers['Content-Type']) {
      options.headers['Content-Type'] = 'application/json';
    }
    if (!options.credentials) {
      options.credentials = 'include';
    }

    this.options = options;
    this.url = url;
  }

  /**
   * Send request to server
   *
   * @param {string} payload
   *
   * @return {Promise}
   */
  request(payload) {
    this.addMethodHeader(payload);

    return fetch(this.url, { body: JSON.stringify(payload), ...this.options })
      .then((data) => data.json());
  }

  /**
   * Send notification to server
   *
   * @param {string} payload
   */
  notify(payload) {
    this.addMethodHeader(payload);

    return fetch(this.url, { body: JSON.stringify(payload), ...this.options });
  }

  /**
   * Adds method header for logging purposes
   *
   * @param payload
   */
  addMethodHeader(payload) {
    if (!Array.isArray(payload)) {
      this.options.headers['X-JsonRpc-Method'] = payload.method;
    }

    this.options.headers['X-JsonRpc-Method'] = payload.reduce((acc, request) => acc.push(request.method), []).join(',');

    return this;
  }
}
