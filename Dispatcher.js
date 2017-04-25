import transportFactory from './providers/transportFactory';
import responseFactory from './providers/responseFactory';
import toJsonRpc from './providers/toJsonRpc';

export default class Dispatcher {
	/**
	 *
	 * @param {string} url
	 * @param {object} options
	 */
	constructor(url, options = {}) {
		this.url = url;
		this.options = options;

		this.adapter = transportFactory(this.url, this.options)
	}

	/**
	 * Request
	 *
	 * @param payload
	 * @return {*|Promise.<TResult>}
	 */
	request(payload) {
		return this.getAdapter().request(toJsonRpc(payload)).then(
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
	 * @param options
	 * @return {*|Promise.<TResult>}
	 */
	requestUrl(payload, url, options = {}) {
		let adapter = transportFactory(url, options);

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
	 * @param options
	 * @return {*|Promise.<TResult>}
	 */
	notifyUrl(payload, url, options = {}) {
		let adapter = transportFactory(url, options);

		return adapter.notify(toJsonRpc(payload))
			.catch(res => responseFactory(payload, res));
	}

	/**
	 * Set header
	 *
	 * @param {string} key
	 * @param {string|number} value
	 * @return {Dispatcher}
	 */
	setHeader(key, value) {
		this.adapter.setHeader(key, value);

		return this;
	}

	/**
	 * Delete header
	 *
	 * @param {string} key
	 * @return {Dispatcher}
	 */
	deleteHeader(key) {
		this.adapter.deleteHeader(key);

		return this;
	}

	/**
	 * Get adapter
	 *
	 * @return {*}
	 */
	getAdapter() {
		return this.adapter;
	}
}
