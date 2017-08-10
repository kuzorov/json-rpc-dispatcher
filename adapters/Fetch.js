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
			options.headers = { 'Content-Type': 'application/json' }
		}
		if (!options.credentials) {
			options.credentials = 'include'
		}

		this.options = options;
		this.url = url;
	}

	/**
	 * Send request to server
	 *
	 * @param {string} payload
	 */
	request(payload) {
		return fetch(this.url, { body: payload, ...this.options })
			.then(data => data.json());
	}

	/**
	 * Send notification to server
	 *
	 * @param {string} payload
	 */
	notify(payload) {
		return fetch(this.url, { body: payload, ...this.options })
	}

	/**
	 * Set header
	 *
	 * @param {string} key
	 * @param {string|number} value
	 * @return {Fetch}
	 */
	setHeader(key, value) {
		this.options.headers[key] = value;

		return this;
	}

	/**
	 * Delete header
	 *
	 * @param {string} key
	 * @return {Fetch}
	 */
	deleteHeader(key) {
		delete this.options.headers.delete[key];

		return this;
	}
}
