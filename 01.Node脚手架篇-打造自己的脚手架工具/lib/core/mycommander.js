const myAction = require('./action');

const mycommander = function (program) {
    program
        .command('create <project> [other...]')
        .alias('crt')
        .description('创建一个新的项目')
        .action(myAction)
}

module.exports = mycommander;