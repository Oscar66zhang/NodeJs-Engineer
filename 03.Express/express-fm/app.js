/**
 * app.js — Express 静态 API 服务器
 * 提供两个接口：
 *   GET  /   — 返回所有用户列表
 *   POST /   — 添加新用户
 * 数据持久化在 ./db.json
 */

const express = require("express");

// 引入数据库读写模块（从 ./db.js 导出）
const db = require("./db");
const { getDb, writeDb } = db;

// 创建 Express 应用实例
const app = express();

// ========== 中间件 ==========
// 解析 JSON 请求体（POST 请求需要 Content-Type: application/json）
app.use(express.json());

// ========== 路由 ==========

// GET / — 获取所有用户
app.get("/", async (req, res) => {
  try {
    // 从 db.json 读取数据并返回
    let back = await getDb();
    res.send(back);
  } catch (err) {
    console.log("错误:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// POST / — 添加新用户
// 请求体格式：{ "username": "xxx", "age": 18 }
app.post("/", async (req, res) => {
  let body = req.body;
  // 空请求体直接返回 403
  if (!body) {
    return res.status(403).json({ error: "缺少用户信息" });
  }
  try {
    // 1. 读取现有数据
    let back = await getDb();
    // 2. 自动给新用户分配 id（取当前最大 id + 1）
    body.id = back.users[back.users.length - 1].id + 1;
    // 3. 把新用户追加到 users 数组
    back.users.push(body);
    // 4. 写回 db.json 持久化
    await writeDb(back);
    // 5. 返回 201 和新用户信息
    res.status(201).json({ message: "添加成功", user: body });
  } catch (err) {
    res.status(500).json({ error: "写入失败" });
  }
});


app.put('/:id', async (req, res) => {
  try {
    let userInfo = await getDb();
    let userId = Number.parseInt(req.params.id);
    let user = userInfo.users.find(item => item.id === userId)
    if (!user) {
      res.status(403).json({
        error: "用户不存在"
      })
    }
    const body = req.body;
    user.username = body.username ? body.username : user.username;
    user.age = body.age ? body.age : user.age;
    userInfo.users[userId - 1] = user;
    await writeDb(userInfo);
    res.status(200).json({
      message: "修改成功",
      user
    })
  } catch (err) {
    res.status(500).json({ error: "修改失败" });
  }
})

// ========== 启动服务器 ==========
app.listen(3000, () => {
  console.log("Run http://127.0.0.1:3000");
});