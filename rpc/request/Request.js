import { v4 as uuid }  from 'uuid';

export default class Request {
	/**
	 * @param {object} payload
	 */
	constructor(payload) {
		if (!payload.id && payload.id !== null) {
			payload.id = uuid();
		}
		if (!payload.method) {
			throw Error('No method specified for request');
		}

		/**
		 * @type {string}
		 */
		this.id = payload.id;

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
		return this.toJsonRpc();
	}
}
