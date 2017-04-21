import Fetch from './../transport/Fetch';

/**
 * @param {string} url
 * @param {object} options
 * @return {Fetch}
 */
export default function(url, options) {
	return new Fetch(url, options);
}
