module.exports = (data) => {
  return `<div class="col">
<div class="col">
  <div id="data" class="card" style="width: 18rem;">
  <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
  <p>${data.getname()}</p>
  <i class="fas fa-mug-hot"></i> ${data.getRole()}
  </div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.getid()}</li>
    <li class="list-group-item"> Email: ${data.getemail()}</li>
    <li class="list-group-item"> Office number: ${data.getOfficeNumber()}</li>
  </ul>
  </div>
  </div>`
}
module.exports = (manager) => {
Function generatemanager (Manager)
    return`<div class="col">
<div id="Manager" class="card" style="width: 18rem;">
<div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
<p>${Manager.getname()}</p>
<i class="fas fa-mug-hot"></i> ${Manager.getRole()}
</div>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Manager.getid()}</li>
  <li class="list-group-item"> Email: ${Manager.getemail()}</li>
  <li class="list-group-item"> Office number: ${Manager.getOfficeNumber()}</li>
</ul>
</div>
</div>`
};

module.exports = (manager) => {
Function generateengineer(Engineer) {
return`
<div class="col">
<div id="engineer" class="card" style="width: 18rem;">
  <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
<p>${Engineer.getname()}</p>
<i class="fas fa-glasses"></i> ${Engineer.getRole()}
  </div>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Engineer.getid}</li>
    <li class="list-group-item"> Email: ${Engineer.email}</li>
    <li class="list-group-item"> GitHub: ${Engineer.github}</li>
  </ul>
</div>
</div>`
};

module.exports = (manager) => {
const Intern = require("./lib/Intern")
Function  generateintern (Intern) {
  return`
<div class="col">
<div id="student" class="card" style="width: 18rem;">
  <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
<p>${intern.name}</p>
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
};
