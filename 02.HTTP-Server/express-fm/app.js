const express = require('express');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const back = await readFile('./db.json', 'utf-8')
        const jsonObj = JSON.parse(back)
        res.send(jsonObj)
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


app.post('/', async (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    let body = req.body;
    if (!body) {
        res.status(403).json({
            error: "缺少用户信息"
        })
        return;
    }
    const back = await readFile('./db.json', 'utf-8')
    const jsonObj = JSON.parse(back);
    const lastUser = jsonObj.users[jsonObj.users.length - 1];
    body.id = lastUser ? lastUser.id + 1 : 1;
    jsonObj.users.push(body);
    try {
        let w = await writeFile('./db.json', JSON.stringify(jsonObj));
        if (!w) {
            res.status(200).send({
                msg: "写入成功"
            })
        }
    } catch {
        res.status(500).json({
            error: "写入失败"
        })
    }
});

app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');
})