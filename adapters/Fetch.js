import uuid from 'uuid';

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
   * @param {string} id
   *
   * @return {Promise}
   */
  request(payload, id = uuid()) {
    return fetch(this.url, { body: payload, ...this.options })
      .then(data => data.json());
  }

  /**
   * Send notification to server
   *
   * @param {string} payload
   */
  notify(payload) {
    return fetch(this.url, { body: payload, ...this.options });
  }
}
