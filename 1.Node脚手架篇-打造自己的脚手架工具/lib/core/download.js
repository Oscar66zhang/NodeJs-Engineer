const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');
const downloadFun = function (url, project) {
    const spinner = ora().start();
    download('direct:' + url, project, { clone: true }, function (err) {
        if (err) {
            spinner.fail(chalk.red('下载失败'));
            console.log(chalk.red(err));
        } else {
            spinner.succeed(chalk.green('下载成功'));
        }
    });
}