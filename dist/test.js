"use strict";

var _parse = _interopRequireDefault(require("./jsonrpc/parse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _parse.default)('{"jsonrpc": "2.0", "method": "subtract", "params": [42, 23], "id": 1}'));
console.log((0, _parse.default)('{"jsonrpc": "2.0", "result": -19, "id": 2}'));
console.log((0, _parse.default)('{"jsonrpc": "2.0", "error": {"code": -32601, "message": "Method not found"}, "id": "1"}'));
console.log((0, _parse.default)());
console.log((0, _parse.default)('{"jsonrpc": "2.0", "method": "subtract", "params": [42, 23]'));
console.log((0, _parse.default)('[{"jsonrpc": "2.0", "error": {"code": 600, "message": "Testing error"}, "id": null},{"jsonrpc": "2.0", "error": {"code": -32600, "message": "Invalid Request"}, "id": null},{"jsonrpc": "2.0", "error": {"code": -32600, "message": "Invalid Request"}, "id": null}]'));
console.log((0, _parse.default)('[{"jsonrpc": "2.0", "method": "sum", "params": [1,2,4], "id": "1"},{"jsonrpc": "2.0", "method": "notify_hello", "params": [7]},{"jsonrpc": "2.0", "method": "subtract", "params": [42,23], "id": "2"},{"foo": "boo"},{"jsonrpc": "2.0", "method": "foo.get", "params": {"name": "myself"}, "id": "5"},{"jsonrpc": "2.0", "method": "get_data", "id": "9"}]'));