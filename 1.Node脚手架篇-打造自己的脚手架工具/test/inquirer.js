var inquirer = require('inquirer').default;
inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: '请输入你的名字'
    }
]).then((answer) => {
    console.log(answer);
})