//1.导入http部分
var http = require("http");
var router = require("./router");

//2.创建服务器 获取到服务器的实例对象
var server = http.createServer();
server.listen(3000, function () {
  console.log("Server is running at http://localhost:3000/");
});

server.on("request", function (req, res) {
  //   res.setHeader("Content-Type", "text/plain;charset=utf-8");
  //   res.setHeader("Content-Type", "text/html;charset=utf-8");
  //   res.write("<h1>你好</h1>");
  //   res.end();
  router(req, res);
});
