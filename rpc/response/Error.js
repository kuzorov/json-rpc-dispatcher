export default class Error {
	constructor(payload) {
		/**
		 * @type {string}
		 */
		this.id = payload.id;

		/**
		 * @type {{}}
		 */
		this.error = {};
		/**
		 * @type {int}
		 */
		this.error.code = payload.error.code;

		/**
		 * @type {string}
		 */
		this.error.message = payload.error.message;

		/**
		 * {*}
		 */
		this.error.data = payload.error.data;
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
