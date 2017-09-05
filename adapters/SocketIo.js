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
  request(payload, id = uuid()) {
    this.socket.emit('socket.request', payload);

    return new Promise((resolve, reject) => {
      this.socket.on(id, data => {
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
    this.socket.emit('socket.request', payload);

    return Promise.resolve();
  }
}
