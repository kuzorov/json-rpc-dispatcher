import parse from './parse';

export default function parseResponse(req, res) {
  const responseParsed = parse(res);

  return Array.isArray(responseParsed)
    ? sortRes(req, responseParsed)
    : responseParsed;
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
      if (req[i] && res[j] && req[i].id === res[j].id) {
        sorted.push(res[j]);
        delete req[i];
        delete res[j];
      }
    }
  }

  return sorted;
}
