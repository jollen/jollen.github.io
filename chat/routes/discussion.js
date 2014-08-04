/*
 * URL Routing Handlers
 */

var history = [];	// 存放訊息

exports.create = function(req, res){
  console.log("CREATE: " + req.params.message);

  // 先打包為 JSON 格式
  var obj = {
  	message: req.params.message
  };

  // 再儲存至 history 陣列
  history.push(obj);

  // 製作 Response 訊息 (JSON 格式)
  var response = {
  	status: "OK"
  }

  // HTTP 檔頭
  res.writeHead(200, {"Content-Type": "application/json"});

  // 回傳 Response 訊息
  res.write(JSON.stringify(response));
  res.end();
};

exports.read = function(req, res){
  console.log("ITEMS: " + req.params.items);

  // 取出最新的 {req.params.items} 筆訊息
  var latest = history.slice(0 - req.params.items);

  // HTTP 檔頭
  res.writeHead(200, {"Content-Type": "application/json"});

  // 回傳
  res.write(JSON.stringify(latest));
  res.end();
};