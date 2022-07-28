const fs = require('fs');
const path = require('path');

const cardTemplatePath = path.join(__dirname, 'template', 'card.html');
const mainTemplatePath = path.join(__dirname, 'template', 'main.html');
function createCard(employee){
const cardTemplate = fs.readFileSync(cardTemplatePath, 'utf-8')
    let replaced = cardTemplate.replace('{{role}}', employee.getRole())
    .replace('{{name}}', employee.getName())
    .replace('{{id}}', employee.getId())
    .replace('{{email}}', employee.getEmail())

    if(employee.getRole() === 'Manager'){
        replaced = replaced.replace('{{attr_key}}', 'Office Number')
        .replace('{{attr_value}}', employee.getOfficeNumber())
    }
    if(employee.getRole() === 'Engineer'){
        replaced = replaced.replace('{{attr_key}}', 'Github')
        .replace('{{attr_value}}', employee.getGithub())
    }
    if(employee.getRole() === 'Intern'){
        replaced = replaced.replace('{{attr_key}}', 'School')
        .replace('{{attr_value}}', employee.getSchool())
    }

    return replaced;
}

function generateHtml(employee){

    const mainTemplate = fs.readFileSync(mainTemplatePath, 'utf-8');

    const cards = employee.map(createCard).join('');

    return mainTemplate.replace('{{body}}', cards);

}

module.exports = generateHtml;