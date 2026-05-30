var fs = require("fs"); // File System
var url = require("url");
const controller = require("./controller");
module.exports = (req, res) => {
  if (req.method == "GET") {
    //请求头
    // console.log(url.parse(req.url, true).query.id);
    if (req.url == "/") {
      controller.index(res);
    } else {
      fs.readFile("./landscape.jpg", function (err, data) {
        res.end(data);
      });
    }
  } else if (req.method == "POST") {
    var data = "";
    //请求体
    req.on("data", function (d) {
      data += d;
    });

    req.on("end", function () {
      controller.user(require("querystring").parse(data), res);
    });
  }
};
