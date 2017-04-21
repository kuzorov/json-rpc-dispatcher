export default class Notification {
	/**
	 * @param {object} payload
	 */
	constructor(payload) {
		if (!payload.method) {
			throw Error('No method specified for request');
		}

		/**
		 * @type {string}
		 */
		this.method = payload.method;

		/**
		 * @type {object|array}
		 */
		this.params = payload.params;
	}

	/**
	 * Convert to JSON-RPC compatible string
	 */
	toJsonRpc() {
		return JSON.stringify({ jsonrpc: '2.0', ...this });
	}

	/**
	 * @inheritDoc
	 */
	toString() {
		this.toJsonRpc();
	}
}
