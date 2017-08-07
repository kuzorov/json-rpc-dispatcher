# How to

```js
import Rpc from 'json-rpc-dispatcher';
import { Request, Notification, Success, Error, JsonRpcError, adapters } from 'json-rpc-dispatcher';
 
let adapter = new adapter.Fetch('http://api.com');

let rpc = new Rpc(adapter);
 
let req1 = new Request({ id: 1, params: { param1: 'param1', param2: 'param2' } });
let req2 = new Request({ id: 2, params: { param1: 'param1', param2: 'param2' } });
 
let not1 = new Notification({ params: { param1: 'param1', param2: 'param2' } });
let not2 = new Notification({ params: { param1: 'param1', param2: 'param2' } });
 
let res = rpc.request(req1);
let resBatch = rpc.request([req1, req2]);
 
rpc.notify(not1);
rpc.notify([not1, not2]);

let resUrl = Rpc.requestUrl(req1, 'http://api.com/api');
let resUrlBatch = Rpc.requestUrl([req1, req2], 'http://api.com/api');
 
Rpc.notifyUrl(not1, 'http://api.com/api');
Rpc.notifyUrl([not1, not2], 'http://api.com/api');
```
