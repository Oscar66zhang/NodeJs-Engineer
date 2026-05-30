/**
 * db.js — 数据库读写模块
 * 负责从 db.json 读取数据和写入数据
 * 将 Node.js 回调风格的 fs 方法 promisify 化，支持 async/await
 */

const fs = require("fs");
const { promisify } = require("util");

// promisify：将 fs.readFile 回调风格 → Promise 风格，方便 await
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

/**
 * getDb — 读取数据库
 * @returns {Promise<Object>} 返回解析后的 JSON 对象
 */
exports.getDb = async () => {
    // 异步读取 db.json 文件内容（utf-8 编码）
    let data = await readFile("./db.json", "utf-8");
    // 解析成 JS 对象返回
    return JSON.parse(data);
};

/**
 * writeDb — 写入数据库
 * @param {Object} data — 要写入的 JS 对象（会序列化成 JSON 字符串）
 * @returns {Promise} 写入成功后 resolve，失败则 reject
 */
exports.writeDb = async (data) => {
    // 将 JS 对象序列化为格式化的 JSON 字符串
    let stringData = JSON.stringify(data);
    // 异步写入 db.json 文件
    return await writeFile("./db.json", stringData);
};