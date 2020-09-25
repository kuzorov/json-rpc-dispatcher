"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseResponse;

var _parse = _interopRequireDefault(require("./parse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseResponse(req, res) {
  var responseParsed = (0, _parse.default)(res);
  return Array.isArray(responseParsed) ? sortRes(req, responseParsed) : responseParsed;
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
  var sorted = [];

  for (var i = 0; i < req.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (req[i] && res[j] && req[i].id === res[j].id) {
        sorted.push(res[j]);
        delete req[i];
        delete res[j];
      }
    }
  }

  return sorted;
}