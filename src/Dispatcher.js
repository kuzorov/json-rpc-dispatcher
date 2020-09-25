import Fetch from './adapters/Fetch';
import parseResponse from './jsonrpc/parseResponse';

export default class Dispatcher {
  /**
   *
   * @param {object} adapter
   */
  constructor(adapter) {
    this.adapter = adapter;
    this.requestInterceptors = [];
    this.responseInterceptors = [];
  }

  /**
   * Request
   *
   * @param payload
   * @return {*|Promise.<TResult>}
   */
  request(payload) {
    payload = this.execRequestInterceptors(payload);

    return this.getAdapter().request(payload).then(
      (res) => this.execResponseInterceptors(parseResponse(payload, res), payload),
      (res) => this.execResponseInterceptors(parseResponse(payload, res), payload)
    );
  }

  /**
   * Notification
   *
   * @param payload
   */
  notify(payload) {
    return this.getAdapter().notify(payload, payload.getMethod())
      .catch((res) => parseResponse(payload, res));
  }

  /**
   * Request to specified url
   *
   * @param url
   * @param {Array|object} payload
   * @return {*|Promise.<TResult>}
   */
  requestUrl(payload, url) {
    if (!(this.getAdapter() instanceof Fetch)) {
      throw new TypeError('Only Fetch adapter supports requestUrl method');
    }

    let adapter = Object.assign(Object.create(this.getAdapter()), this.getAdapter(), { url });
    payload = this.execRequestInterceptors(payload);

    return adapter.request(payload, payload.getId(), payload.getMethod()).then(
      (res) => this.execResponseInterceptors(parseResponse(payload, res), payload),
      (res) => this.execResponseInterceptors(parseResponse(payload, res), payload)
    );
  }

  /**
   * Add interceptor before request
   *
   * @param {function} callback
   * @return {Dispatcher}
   */
  interceptRequest(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('Interceptor must be a function');
    }
    this.requestInterceptors.push(callback);

    return this;
  }

  /**
   * Notify to specified url
   *
   * @param url
   * @param payload
   * @return {*|Promise.<TResult>}
   */
  notifyUrl(payload, url) {
    if (!(this.getAdapter() instanceof Fetch)) {
      throw new TypeError('Only Fetch adapter supports notifyUrl method');
    }

    let adapter = Object.assign(Object.create(this.getAdapter()), this.getAdapter(), { url });

    return adapter.notify(payload, payload.getMethod())
      .catch((res) => parseResponse(payload, res));
  }

  /**
   * Add interceptor before response
   *
   * @param {function} callback
   * @return {Dispatcher}
   */
  interceptResponse(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('Interceptor must be a function');
    }
    this.responseInterceptors.push(callback);

    return this;
  }

  /**
   * Delete interceptor before response
   *
   * @param {function} callback
   * @return {Dispatcher}
   */
  deleteRequestInterceptor(callback) {
    this.requestInterceptors = this.requestInterceptors.filter((el) => el !== callback);

    return this;
  }

  /**
   * Delete interceptor before response
   *
   * @param {function} callback
   * @return {Dispatcher}
   */
  deleteResponseInterceptor(callback) {
    this.requestInterceptors = this.responseInterceptors.filter((el) => el !== callback);

    return this;
  }

  /**
   * Exec request interceptors
   *
   * @param {object} payload
   * @return {object}
   * @private
   */
  execRequestInterceptors(payload) {
    if (!this.requestInterceptors.length) {
      return payload;
    }
    this.requestInterceptors.forEach((callback) => { payload = callback(payload); });

    return payload;
  }

  /**
   * Exec response interceptors
   *
   * @param {object} response
   * @param {object} payload
   * @return {object}
   * @private
   */
  execResponseInterceptors(response, payload) {
    if (!this.responseInterceptors.length) {
      return response;
    }
    this.responseInterceptors.forEach((callback) => { response = callback(response, payload); });

    return response;
  }

  /**
   * Get adapter
   *
   * @return {*}
   */
  getAdapter() {
    if (!this.adapter) {
      throw new TypeError('Adapter is not set');
    }

    return this.adapter;
  }

  /**
   * Set adapter
   *
   * @param {object} adapter
   * @return {Dispatcher}
   */
  setAdapter(adapter) {
    this.adapter = adapter;

    return this;
  }
}
