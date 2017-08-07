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
	static requestUrl(payload, url, options = {}) {
		let adapter = Object.assign({}, this.getAdapter()).url = url;

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
	static notifyUrl(payload, url, options = {}) {
		let adapter = Object.assign({}, this.getAdapter()).url = url;

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
