const mongoose = require('mongoose');

// ========== 数据库连接 ==========

/**
 * 连接到 MongoDB 数据库
 * 使用 mongoose.connect 建立连接，地址为本地 MongoDB 的 mytest 数据库
 */
async function main() {
    await mongoose.connect('mongodb://localhost:27017/mytest');
}

// 连接成功与失败的回调处理
main()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

module.exports = {
    User: mongoose.model('User', require('./userModel'))
}

