// ========== 视频控制器 ==========

/**
 * 获取视频列表处理函数
 * 路径：GET /api/v1/video/list
 * @param {Object} req  - Express 请求对象
 * @param {Object} res  - Express 响应对象，用于返回视频列表数据
 */
exports.list = async (req, res) => {
    // 打印请求方法（GET）
    console.log(req.method);

    // 返回视频列表响应
    res.send('/video-list');
};

/**
 * 获取视频用户列表处理函数
 * 路径：GET /api/v1/video/users
 * @param {Object} req  - Express 请求对象
 * @param {Object} res  - Express 响应对象，用于返回与视频相关的用户数据
 */
exports.users = async (req, res) => {
    // 打印请求方法（GET）
    console.log(req.method);

    // 返回视频用户列表响应
    res.send('/video-users');
};