# Express 脚手架搭建步骤

## 1. 初始化项目

```bash
mkdir express-project
cd express-project
npm init -y
```

## 2. 安装依赖

```bash
npm install express
# 可选开发依赖（自动重启）
npm install --save-dev nodemon
```

## 3. 创建目录结构

```bash
mkdir -p bin routes controllers models views config
```

```
express-project/
├── bin/              # 启动入口
│   └── www
├── routes/           # 路由（URL 分发）
│   └── index.js
├── controllers/      # 控制器（业务逻辑）
│   └── index.js
├── models/           # 数据模型（数据库交互）
│   └── index.js
├── views/            # 模板视图
├── config/           # 配置文件
│   └── index.js
├── app.js            # Express 主文件（中间件配置）
├── package.json
└── db.json           # JSON 文件数据库
```

## 4. 配置 package.json scripts

```bash
npm pkg set scripts.dev="nodemon app.js"
npm pkg set scripts.start="node app.js"
```

```json
{
  "scripts": {
    "dev": "nodemon app.js",
    "start": "node app.js"
  }
}
```

## 5. 创建 bin/www（服务器启动文件）

`bin/www`：
```js
const app = require('../app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

`package.json` 中 `main` 改为 `bin/www`：
```bash
npm pkg set main=bin/www
```

## 6. 创建 app.js（中间件配置）

`app.js`：
```js
const express = require('express');

const app = express();

// 中间件
app.use(express.json());        // 解析 JSON
app.use(express.urlencoded());  // 解析 URL-encoded

// 路由
app.get('/', (req, res) => {
  res.send('Hello');
});

module.exports = app;
```

## 7. 创建路由文件

`routes/index.js`：
```js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// GET /users
router.get('/users', controller.getUsers);

// POST /users
router.post('/users', controller.createUser);

module.exports = router;
```

`controllers/index.js`：
```js
exports.getUsers = async (req, res) => {
  res.json({ message: '获取用户列表' });
};

exports.createUser = async (req, res) => {
  const body = req.body;
  res.status(201).json({ message: '创建用户', body });
};
```

`app.js` 中注册路由：
```js
const indexRouter = require('./routes/index');
app.use('/', indexRouter);
```

## 8. 目录分工说明

| 目录/文件 | 职责 |
|-----------|------|
| `bin/www` | 服务器启动、监听端口 |
| `app.js` | Express 实例配置、中间件注册 |
| `routes/` | URL 路径到控制器函数的映射 |
| `controllers/` | 具体业务逻辑（增删改查） |
| `models/` | 数据模型（数据库读写） |
| `views/` | 模板引擎（ejs/pug） |
| `config/` | 数据库连接、密钥等配置 |

## 9. 启动项目

```bash
npm run dev    # 开发模式（nodemon 自动重启）
npm start      # 生产模式
```

## 10. 分离 db.js（数据库读写模块）

`models/db.js`：
```js
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

exports.getDb = async () => {
    const data = await readFile('./db.json', 'utf-8');
    return JSON.parse(data);
};

exports.writeDb = async (data) => {
    return await writeFile('./db.json', JSON.stringify(data));
};
```

---

**脚手架核心思想**：职责分离
- `bin/www` 只管启动
- `app.js` 只管中间件和路由注册
- `routes/` 把 URL 分发到对应控制器
- `controllers/` 写业务逻辑
- `models/` 只管数据读写