var inquirer = require('inquirer').default;
const download = require('download-git-repo');
const ora = require('ora').default;
var config = require('../../config');
const myAction = (project, args) => {
    // console.log(project);
    // console.log(args);
    //express koa egg
    inquirer.prompt([
        {
            type: 'rawlist',
            name: 'framwork',
            choices: config.framework,
            message: '请选择你要使用的框架',
        }
    ]).then((answer) => {
        console.log(answer);
        download('direct:' + config.foramworkUrl[answer.framwork], project, { clone: true }, function (err) {
            console.log(err ? 'Error' : 'Success');
        })
    });
}

module.exports = myAction;