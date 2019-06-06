"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (response) {
  if (Array.isArray(response) && response.some(function (el) {
    return el instanceof Error;
  })) {
    throw response;
  }
  if (response instanceof Error) {
    throw response;
  }

  return response;
};