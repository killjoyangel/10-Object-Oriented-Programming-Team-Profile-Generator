
const generateManager = (data) => {
  return` <div class="row row-cols-2 row-cols-md-3 g-5">
  <div class="col">
<div id="manager" class="card" style="width: 18rem;">
  <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
  <p>${data.getName()}</p>
  <i class="fas fa-mug-hot"></i> ${data.getRole()}
  </div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.getid()}</li>
    <li class="list-group-item"> Email: <a href="mailto:${data.email}">${data.email}</a></li>
    <li class="list-group-item"> Office number: ${data.getOfficeNumber()}</li>
  </ul>
  </div>
  </div>`
}

const generateEngineer = (data) =>{
  return`<div class="col">
  <div id="engineer" class="card" style="width: 18rem;">
    <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
<p>${data.getName()}</p>
<i class="fas fa-glasses"></i> ${data.getRole()}
  </div>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.getid()}</li>
    <li class="list-group-item"> Email: <a href="mailto:${data.email}">${data.email}</a></li>
    <li class="list-group-item"> GitHub: ${data.getGitHub()}</li>
  </ul>
</div>
</div>`
};

const  generateIntern = (data) => {
  return`<div class="col">
  <div id="student" class="card" style="width: 18rem;">
    <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
<p>${data.getName()}</p>
<i class="fas fa-user-graduate"></i> ${data.getRole()}
  </div>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.getid()}</li>
    <li class="list-group-item"> Email: <a href="mailto:${data.email}">${data.email}</a></li>
   <li class="list-group-item"> School: ${data.getschool()}</li>
  </ul>
</div>
</div>`
};

const generateCards = (data) => {
  let htmlString = "";
  data.forEach((element) => {
      console.log(element)
      if (element.getRole() === "Manager") {
          let string = generateManager(element);
          htmlString += string;

      } else if (element.getRole() === "Engineer") {
          let string = generateEngineer(element);
          htmlString += string;

      } else if (element.getRole() === "Intern") {
          let string = generateIntern(element);
          htmlString += string;
      }
  });
  return htmlString;

};

const generateHTML = (data) => {
  return`<!DOCTYPE html>
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
  </div>
  ${generateCards(data)}
  </div> 
 </body>
  </html>`;
  
};

module.exports = generateHTML;