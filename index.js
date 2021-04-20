const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (manager, engineer, intern) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
  integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  
  <title>Programing Team Profile</title>
  </head>
  <body>
  
  <div class="jumbotron">
  <div class="p-3 mb-2 bg-danger text-white">
  <h1 class="display-4">My Team</h1>
  </div>
  </div>
  
  <div class="row row-cols-2 row-cols-md-3 g-5">
    <div class="col">
  <div id="manager" class="card" style="width: 18rem;">
    <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
  <p>${manager.name}</p>
  <i class="fas fa-mug-hot"></i> ${manager.jobtitle}
    </div>
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item"> Email: ${manager.email}</li>
      <li class="list-group-item"> Office number: ${manager.office}</li>
    </ul>
  </div>
  </div>
  <div class="col">
  <div id="engineer" class="card" style="width: 18rem;">
    <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
  <p>${engineer.name}</p>
  <i class="fas fa-glasses"></i> ${engineer.jobtitle}
    </div>
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item"> Email: ${engineer.email}</li>
      <li class="list-group-item"> GitHub: ${engineer.github}</li>
    </ul>
  </div>
  </div>
  <div class="col">
  <div id="student" class="card" style="width: 18rem;">
    <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
  <p>${intern.name}</p>
  <i class="fas fa-user-graduate"></i> ${intern.jobtitle}
    </div>
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item"> Email: ${intern.email}</li>
      <li class="list-group-item"> School: ${intern.school}</li>
    </ul>
  </div>
  </div>
  </div>
  </body>
  </html>>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'jobtitle',
      message: 'What is your job title?',
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is your office number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'school',
      message: 'what school did you attend?',
    },
  ])

  .then((manager, engineer, intern) => {
    const htmlPageContent = generateHTML(manager, engineer, intern);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
