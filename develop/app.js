const inquirer = require('inquirer');
const Engineer = require('./src/employee/engineer');
const Intern = require('./src/employee/intern');
const Manager = require('./src/employee/manager');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./generate-html/html');
const employee = [];

const outputHtmlFile = path.join(__dirname, 'output', 'team.html');

async function main(){

    const managerRole = 'manager'
    const engineerRole = 'engineer'
    const internRole = 'intern'


    const answers = await inquirer.prompt([
        {
            type: 'list',
            message: 'What is the role?',
            name: 'role',
            choices: [managerRole, engineerRole, internRole]
        },
        {
            type: 'input',
            message: 'What is the employee ID',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the employee name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the employee email',
            name: 'email',
            validate: function(email)
            {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        //manager 
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'officeNumber',
            when: (answers) => answers.role === managerRole,
        },
        {
            type: 'input',
            message: 'What is the github username?',
            name: 'github',
            when: (answers) => answers.role === engineerRole,
        },
        {
            type: 'input',
            message: 'What is the school?',
            name: 'school',
            when: (answers) => answers.role === internRole,
        },
        {
            type: 'confirm',
            message: 'Add another employee?',
            name: 'addAnother',
        },
    ]);

    if(answers.role === managerRole){
        employee.push(new Manager(answers.id, answers.name, answers.email, answers.officeNumber))
    }
    if(answers.role === engineerRole){
        employee.push(new Engineer(answers.id, answers.name, answers.email, answers.github))
    }
    if(answers.role === internRole){
        employee.push(new Intern(answers.id, answers.name, answers.email, answers.school))
    }

    console.log(employee);

if(!answers.addAnother){
    const html = generateHtml(employee)
    fs.writeFileSync(outputHtmlFile, html, 'utf-8');
}else{
  await main();
}

}

main();
