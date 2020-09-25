import uuid from 'uuid';

export default class SocketIo {
  /**
   *
   * @param {io} socket
   */
  constructor(socket) {
    this.socket = socket;
  }

  /**
   * Send request to server
   *
   * @param {string} payload
   * @param {string} id
   *
   * @return {Promise}
   */
  request(payload) {
    const id = uuid();
    this.socket.emit('request', JSON.stringify(payload));

    return new Promise((resolve) => {
      this.socket.on(`response.${ id }`, (data) => {
        resolve(data);
      });
    });
  }

  /**
   * Send notification to server
   *
   * @param {string} payload
   *
   * @return {Promise}
   */
  notify(payload) {
    this.socket.emit('request', JSON.stringify(payload));

    return Promise.resolve();
  }
}
