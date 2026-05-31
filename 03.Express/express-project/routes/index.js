const express = require('express');
const router = express.Router();

// ========== 子路由挂载 ==========

// 将 ./user 路由模块挂载到当前路由上
// 访问 /user 开头的路径会由 user.js 路由处理
router.use('/user', require('./user'));

// 将 ./video 路由模块挂载到当前路由上
// 访问 /video 开头的路径会由 video.js 路由处理
router.use('/video', require('./video'));

// ========== 导出模块 ==========

// 导出聚合路由，供 app.js 中的 app.use('/api/v1', router) 使用
module.exports = router;