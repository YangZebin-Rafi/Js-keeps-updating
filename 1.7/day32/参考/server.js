/* 001-导入模块 http */
const http = require("http");
/* 002-创建HTTP服务 */
const server = http.createServer(function(request, response) {

    var json = [
        { id: "1", name: "zs", age: 18 },
        { id: "2", name: "zs", age: 18 },
        { id: "3", name: "zs", age: 18 },
        { id: "4", name: "zs", age: 18 },
        { id: "5", name: "zs", age: 18 },
    ];

    response.end(JSON.stringify(json));
});
/* 003-开启服务监听 */
server.listen("3000", "127.0.0.1", function() {
    console.log("开启服务器监听，端口号是：3000");
});