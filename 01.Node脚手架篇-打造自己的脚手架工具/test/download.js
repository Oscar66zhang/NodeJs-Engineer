const download = require('download-git-repo');
const ora = require('ora').default;

const project = 'testproject';
const url = 'vuejs/awesome-vue';

const spinner = ora('代码正在下载').start();
download(url, project, (err) => {
    if (!err) {
        spinner.succeed('代码下载成功');
        console.log('Done! you run:');
        console.log(`cd ${project}`);
    } else {
        spinner.fail('代码下载失败: ' + err);
    }
});

