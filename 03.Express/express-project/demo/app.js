const express = require('express');
const routes = require('../routes/index');
const routesVideo = require('../routes/video');
const app = express();
const port = process.env.PORT || 3000;

// 中间件：解析 JSON 格式的请求体
app.use(express.json());
// 中间件：解析表单格式的请求体（extended:true 支持复杂对象）
app.use(express.urlencoded({ extended: true }));

app.get('/user', (req, res) => {
    // 下载文件：让浏览器下载指定路径的文件
    res.download();

    // 结束响应：手动终止响应，不再返回任何内容
    res.end();

    // 返回 JSON 数据：自动设置响应头为 application/json
    res.json();

    // 重定向：跳转到指定 URL 或路由
    res.redirect();

    // 渲染模板页面：配合模板引擎（ejs/pug等）返回 HTML
    res.render();

    // 只返回 HTTP 状态码，不返回内容（如 404/500/200）
    res.sendStatus();

    // 设置 HTTP 状态码 + 返回 JSON 数据（最常用）
    res.status(200).json();
})
    .post('/video', (req, res) => {
        // 接收 POST 请求体中的 name 参数，并返回字符串
        res.send(`Hello ${req.body.name}`);
    })

// 启动服务，监听端口
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});