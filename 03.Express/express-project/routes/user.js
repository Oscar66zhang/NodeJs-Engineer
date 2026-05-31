const express = require('express');
const router = express.Router();

// 引入 user 控制器，获取具体的业务处理函数
const userController = require('../controllers/userController');

const { body, validationResult } = require('express-validator');

// ========== 用户相关路由定义 ==========

// 注册用户：POST /api/v1/user/register
router
    .post('/register', body('username').notEmpty(), body('age').isNumeric().notEmpty(), userController.register)

    // 获取用户列表：GET /api/v1/user/list
    .get('/list', userController.list)

    // 删除用户：DELETE /api/v1/user/delete
    .delete('/delete', userController.delete);

// ========== 导出模块 ==========
module.exports = router;