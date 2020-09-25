import { v4 as uuid } from 'uuid';
import Notification from './Notification';

export default class Request extends Notification {
  /**
   * @param {object} payload
   */
  constructor(payload) {
    super(payload);

    if (!payload.id && payload.id !== null) {
      payload.id = uuid();
    }

    /**
     * @type {string}
     */
    this.id = payload.id;
  }

  /**
   * Get request id
   *
   * @return {string}
   */
  getId() {
    return this.id;
  }
}
