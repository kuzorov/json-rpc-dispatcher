export default class Success {
	constructor(payload) {
		/**
		 * @type {string}
		 */
		this.id = payload.id;

		/**
		 * {*}
		 */
		this.result = payload.result;
	}

	/**
	 * @return {string}
	 */
	getId() {
		return this.id;
	}

	/**
	 * @return {*}
	 */
	getResult() {
		return this.result;
	}
}
