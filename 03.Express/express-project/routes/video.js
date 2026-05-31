const express = require('express');
const router = express.Router();

// 引入 video 控制器，获取具体的业务处理函数
const videoController = require('../controllers/videoControl');

// ========== 视频相关路由定义 ==========

// 获取视频列表：GET /api/v1/video/list
router
    .get('/list', videoController.list)

// 获取视频用户列表：GET /api/v1/video/users
    .get('/users', videoController.users);

// ========== 导出模块 ==========
module.exports = router;