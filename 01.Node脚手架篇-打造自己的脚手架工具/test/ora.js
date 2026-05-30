const ora = require('ora').default;
const spinner = ora('正在加载中...').start();
spinner.text = 'loading...';
setTimeout(() => {
    console.log('加载完成');
    spinner.succeed('结束');
}, 3000);
