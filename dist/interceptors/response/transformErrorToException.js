"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Error = _interopRequireDefault(require("../../jsonrpc/response/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(response) {
  if (Array.isArray(response) && response.some(function (el) {
    return el instanceof _Error.default;
  })) {
    throw response;
  }

  if (response instanceof _Error.default) {
    throw response;
  }

  return response;
};

exports.default = _default;