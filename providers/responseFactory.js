import Error from './../rpc/response/Error';
import JsonRpcError from './../rpc/response/JsonRpcError';
import Success from './../rpc/response/Success';

export default function responseFactory(req, res) {
  try {
    if (typeof res !== 'object') {
      res = JSON.parse(res);
    }

    if (Array.isArray(res)) {
      res = res.map(payload => getResponseObj(payload));

      return sortRes(req, res);
    }

    return getResponseObj(res);
  } catch (e) {
    return new JsonRpcError({ id: null, error: { code: -32603, message: 'Error while processing response', data: e } });
  }
}

/**
 * Sort response according to batch request order
 *
 * @param {Array} req
 * @param {Array} res
 *
 * @return {Array}
 */
function sortRes(req, res) {
  let sorted = [];

  for (let i = 0; i < req.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (req[i] && res[j] && req[i].id == res[j].id) {
        sorted.push(res[j]);
        delete req[i];
        delete res[j];
      }
    }
  }

  return sorted;
}

/**
 * Get response object
 *
 * @param res
 * @return {*}
 */
function getResponseObj(res) {
  if (res && 'result' in res) {
    return new Success(res);
  }
  if (res.error) {
    if (res.error.code > -32768 && res.error.code < -32000) {
      return new JsonRpcError(res);
    }

    return new Error(res);
  }

  return new JsonRpcError({
    id: null,
    error: { code: -32603, message: 'Error while processing response', data: res }
  });
}
