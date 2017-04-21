import Success from './../rpc/response/Success';
import Error from './../rpc/response/Error';
import JsonRpcError from './../rpc/response/JsonRpcError';

export default function responseFactory(req, res) {
	if (Array.isArray(res)) {
		res = res.map(payload => getResponseObj(payload));
		return sortRes(req, res);
	}

	return getResponseObj(res);
}

/**
 * Sort response according to batch request order
 *
 * @param {array} req
 * @param {array} res
 *
 * @return {array}
 */
function sortRes(req, res) {
	return req.map(el => {
		let id = el.getId();

		if (id === null) {
			throw Error('Id cannot be null in butch request');
		}

		for (let i = 0; i < res.length; i++) {
			if (res[i].getId === id) {
				return res[i];
			}
		}
	})
}

/**
 * Get response object
 *
 * @param res
 * @return {*}
 */
function getResponseObj(res) {
	try {
		res = JSON.decode(res);

		if (res.result) {
			return new Success(res);
		}
		if (res.error) {
			if (res.error.code > -32768 && res.error.code < -32000) {
				return new JsonRpcError(res);
			}

			return new Error(res);
		}

		return new Success(res);
	} catch (e) {
		new JsonRpcError({ id: null, error: { code: -32603, message: 'Error while response processing' } })
	}
}
