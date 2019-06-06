import Fetch from './adapters/Fetch';
import SocketIo from './adapters/SocketIo';
import Dispatcher from './Dispatcher';
import transformErrorToException from './interceptors/response/transformErrorToException';
import Notification from './rpc/request/Notification';
import Request from './rpc/request/Request';
import Error from './rpc/response/Error';
import JsonRpcError from './rpc/response/JsonRpcError';
import Success from './rpc/response/Success';

let adapters = {
  Fetch,
  SocketIo: SocketIo
};

let interceptors = {
  response: {
    transformErrorToException
  }
};

export default Dispatcher;
export { Request, Notification, Success, Error, JsonRpcError, adapters, interceptors };
