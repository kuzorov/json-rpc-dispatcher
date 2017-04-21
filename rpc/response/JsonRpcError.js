export default class JsonRpcError extends Error {
	constructor(payload) {
		super(payload);
	}
}
