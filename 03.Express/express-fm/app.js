// 引入 Express 框架，用于搭建 Web 服务器
const express = require("express");
// 引入 Node.js 内置文件系统模块 fs，用于读写文件
const fs = require("fs");
// 从内置工具模块 util 中取出 promisify 方法
// 作用：把「回调风格的异步函数」转成「返回 Promise 的函数」，方便用 async/await
const { promisify } = require("util");
// 将 fs.readFile（原本要传回调）包装成 Promise 版的 readFile
// 以后调用 readFile 就不用写回调，直接用 await 即可
const readFile = promisify(fs.readFile);

const app = express();

app.use(express.urlencoded);

app.get("/", async function (req, res) {
  try {
    let back = await readFile("./db.json", "utf-8");
    const jsonObj = JSON.parse(back);
    res.send(jsonObj);
  } catch {
    res.status(500).json({ error });
  }
});

app.post("/", async (req, res) => {
  //   console.log(req.header);
  let body = req.body;
  if (!body) {
    res.status(403).json({
      error: "缺少用户信息",
    });
  }
  let back = await readFile("./db.json", "utf-8");
  const jsonObj = JSON.parse(back);
  jsonObj.users[jsonObj.users.length - 1].id + 1;
});

app.listen(3000, () => {
  console.log("Run http://127.0.0.1:3000");
});
