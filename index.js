const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
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
  <p>${answers.name}</p>
  <i class="fas fa-mug-hot"></i> ${answers.jobtitle}
    </div>
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item"> Email: ${answers.email}</li>
      <li class="list-group-item"> GitHub: ${answers.office}</li>
    </ul>
  </div>
  </div>
  <div class="col">
  <div id="engineer" class="card" style="width: 18rem;">
    <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
  <p>${answers.name}</p>
  <i class="fas fa-glasses"></i> ${answers.jobtitle}
    </div>
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item"> Email: ${answers.email}</li>
      <li class="list-group-item"> GitHub: ${answers.office}</li>
    </ul>
  </div>
  </div>
  <div class="col">
  <div id="student" class="card" style="width: 18rem;">
    <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
  <p>${answers.name}</p>
  <i class="fas fa-user-graduate"></i> ${answers.student}
    </div>
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item"> Email: ${answers.email}</li>
      <li class="list-group-item"> School: ${answers.school}</li>
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
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
