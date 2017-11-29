# How to

```js
import Rpc from 'json-rpc-dispatcher';
import { Request, Notification, Success, Error, JsonRpcError, adapters } from 'json-rpc-dispatcher';
 
let adapter = new adapters.Fetch('http://api.com');

let rpc = new Rpc(adapter);
 
rpc.interceptRequest((request) => {
  // ...
  return request;  
});
 
rpc.interceptResponse((response, request) => {
  // ...
  return response;  
});
 
rpc.deleteRequestInterceptor(callback);
rpc.deleteResponseInterceptor(callback);
 
let req1 = new Request({ id: 1, params: { param1: 'param1', param2: 'param2' } });
let req2 = new Request({ id: 2, params: { param1: 'param1', param2: 'param2' } });
 
let not1 = new Notification({ params: { param1: 'param1', param2: 'param2' } });
let not2 = new Notification({ params: { param1: 'param1', param2: 'param2' } });
 
let res = rpc.request(req1);
let resBatch = rpc.request([req1, req2]);
 
rpc.notify(not1);
rpc.notify([not1, not2]);

let resUrl = rpc.requestUrl(req1, 'http://api.com/api');
let resUrlBatch = rpc.requestUrl([req1, req2], 'http://api.com/api');
 
rpc.notifyUrl(not1, 'http://api.com/api');
rpc.notifyUrl([not1, not2], 'http://api.com/api');
```
