var inquirer = require('inquirer').default;
const download = require('download-git-repo');
const ora = require('ora').default;
var config = require('../../config');
const myAction = (project, args) => {
    inquirer.prompt([
        {
            type: 'rawlist',
            name: 'framwork',
            choices: config.framework,
            message: '请选择你要使用的框架',
        }
    ]).then((answer) => {
        const spinner = ora('正在下载模板...').start();
        download(config.foramworkUrl[answer.framwork], project, (err) => {
            if (err) {
                spinner.fail('下载失败');
                console.log(err);
            } else {
                spinner.succeed('下载成功');
            }
        })
    });
}

module.exports = myAction;