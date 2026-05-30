const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');
const clientFun = async function (c) {
    await client.connect();
    const db = client.db('mytest');
    return db.collection('cc')
}

const main = async () => {
    try {
        const cc = await clientFun('cc');

        //===================插入操作======================
        // await cc.insertMany([
        //     { username: 'Monica', age: 18 },
        //     { username: 'Orange', age: 19 },
        //     { username: 'Apple', age: 20 },
        // ]);

        //===================查找操作======================
        // const d = await cc.find({ age: { $gt: 18 } }).toArray();

        //===================更新操作======================
        // const d = await cc.updateOne({ username: 'Monica' }, { $set: { age: 28 } });

        //===================删除操作======================
        const d = await cc.deleteOne({ username: 'Monica' });
        console.log(d);
    }
    catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

main()
