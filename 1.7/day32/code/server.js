/* 001-先导入http模块 */
let http = require("http");
/* 002-利用http模块来创建Http服务 */
let server = http.createServer(function(req,res){
  /* req 请求 */
  /* res 响应 */
  // console.log(req);
  // res.end("ok");

  let data = {
    status:"success",
    msg:"注册成功"
  }
  res.end(JSON.stringify(data));
})

/* 003-开启服务监听 */
server.listen("3000","127.0.0.1",function(){
  console.log("开启服务监听...");
});