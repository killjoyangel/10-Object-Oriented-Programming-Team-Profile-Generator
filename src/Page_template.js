const  generateTeam = theATeam => {
 const generatemanager = manager => {
  return`<div class="col">
  <div id="Manager" class="card" style="width: 18rem;">
  <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
  <p>${manager.getname()}</p>
  <i class="fas fa-mug-hot"></i> ${manager.getRole()}
  </div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.getid()}</li>
    <li class="list-group-item"> Email: ${manager.getemail()}</li>
    <li class="list-group-item"> Office number: ${manager.getOfficeNumber()}</li>
  </ul>
  </div>
  </div>`
}

const generateEngineer = engineer =>{
  return`<div class="col">
<div id="engineer" class="card" style="width: 18rem;">
  <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
<p>${engineer.getname()}</p>
<i class="fas fa-glasses"></i> ${engineer.getRole()}
  </div>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.getid}</li>
    <li class="list-group-item"> Email: ${engineer.email}</li>
    <li class="list-group-item"> GitHub: ${engineer.github}</li>
  </ul>
</div>
</div>`
}

const Intern = require("./lib/Intern")
const  generateIntern = intern => {
  return`
<div class="col">
<div id="student" class="card" style="width: 18rem;">
  <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
<p>${intern.getname()}</p>
<i class="fas fa-user-graduate"></i> ${intern.getRole()}
  </div>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.getid()}</li>
    <li class="list-group-item"> Email: ${intern.getemail()}</li>
    <li class="list-group-item"> School: ${intern.getschool()}</li>
  </ul>
</div>
</div>`
}

module.exports = team => {
  return`<!DOCTYPE html
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
  integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  <link rel="stylesheet"href="output/styles.css"/>
  <title>Programing Team Profile</title>
  </head>
  <body>
  
  <div class="jumbotron">
  <div class="p-3 mb-2 bg-danger text-white">
  <h1 class="display-4">My Team</h1>
  </div>
  </div>`
  
}
};