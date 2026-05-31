const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1', router);

const port = process.env.PORT || 3000;

// 启动服务，监听端口
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});