const { User } = require('../models/index')

// ========== 用户控制器 ==========

/**
 * 用户注册处理函数
 * 路径：POST /api/v1/user/register
 * @param {Object} req  - Express 请求对象，包含请求体（body）
 * @param {Object} res  - Express 响应对象，用于返回响应数据
 */
exports.register = async (req, res) => {
    // 打印客户端提交的请求体数据（通常为 JSON 格式的注册信息）
    console.log(req.body);
    return;
    const userModel = new User(req.body)
    const dbBack = await userModel.save()
    res.status(201).json(dbBack);
}

/**
 * 获取用户列表处理函数
 * 路径：GET /api/v1/user/list
 * @param {Object} req  - Express 请求对象
 * @param {Object} res  - Express 响应对象
 */
exports.list = async (req, res) => {
    // 打印请求方法（GET）
    console.log(req.method);

    // 返回用户列表响应
    res.send('/user-list');
};

/**
 * 删除用户处理函数
 * 路径：DELETE /api/v1/user/delete
 * @param {Object} req  - Express 请求对象
 * @param {Object} res  - Express 响应对象
 */
exports.delete = async (req, res) => {
    // 打印请求方法（DELETE）
    console.log(req.method);

    // 返回删除操作响应
    res.send('/user-delete');
};