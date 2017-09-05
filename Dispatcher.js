import Fetch from '../../logic/common/fileUploadDispatcher/uploadAdapters/Fetch';
import responseFactory from './providers/responseFactory';
import toJsonRpc from './providers/toJsonRpc';

export default class Dispatcher {
  /**
   *
   * @param {object} adapter
   */
  constructor(adapter) {
    this.adapter = adapter;
  }

  /**
   * Request
   *
   * @param payload
   * @return {*|Promise.<TResult>}
   */
  request(payload) {
    return this.getAdapter().request(toJsonRpc(payload), payload.getId()).then(
      res => responseFactory(payload, res),
      res => responseFactory(payload, res)
    );
  }

  /**
   * Notification
   *
   * @param payload
   */
  notify(payload) {
    return this.getAdapter().notify(toJsonRpc(payload))
      .catch(res => responseFactory(payload, res));
  }

  /**
   * Request to specified url
   *
   * @param url
   * @param {Array|object} payload
   * @return {*|Promise.<TResult>}
   */
  requestUrl(payload, url) {
    if (!this.getAdapter() instanceof Fetch) {
      throw 'Only Fetch adapter supports requestUrl method'
    }

    let adapter = Object.assign(Object.create(this.getAdapter()), this.getAdapter(), { url });

    return adapter.request(toJsonRpc(payload)).then(
      res => responseFactory(payload, res),
      res => responseFactory(payload, res)
    );
  }

  /**
   * Notify to specified url
   *
   * @param url
   * @param payload
   * @return {*|Promise.<TResult>}
   */
  notifyUrl(payload, url) {
    if (!this.getAdapter() instanceof Fetch) {
      throw 'Only Fetch adapter supports notifyUrl method'
    }

    let adapter = Object.assign(Object.create(this.getAdapter()), this.getAdapter(), { url });

    return adapter.notify(toJsonRpc(payload))
      .catch(res => responseFactory(payload, res));
  }

  /**
   * Get adapter
   *
   * @return {*}
   */
  getAdapter() {
    if (!this.adapter) {
      throw 'Adapter is not set'
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
