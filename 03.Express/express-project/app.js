const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/index');
const app = express();

// ========== 中间件配置 ==========

// 解析 JSON 请求体，使 req.body 可访问 JSON 数据
app.use(express.json());

// 解析 URL 编码的请求体（如表单提交），extended: true 支持嵌套对象
app.use(express.urlencoded({ extended: true }));

// 启用 CORS，允许跨域请求（前端开发时对接不同端口 API）
app.use(cors());

// HTTP 请求日志中间件，以 dev 格式输出（记录方法、路径、状态码等）
app.use(morgan('dev'));

// ========== 路由挂载 ==========

// 将路由模块挂载到 /api/v1 路径下
// 所有路由将以 /api/v1 开头，如 /api/v1/user/list
app.use('/api/v1', router);

// ========== 服务器启动 ==========

// 从环境变量读取端口，若未设置则默认为 3000
const port = process.env.PORT || 3000;

// 启动服务，监听指定端口
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});