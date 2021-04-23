const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")


const generateManager => {
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

const generateEngineer = Engineer => {
        return`
<div class="col">
<div id="engineer" class="card" style="width: 18rem;">
  <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
<p>${engineer.getname()}</p>
<i class="fas fa-glasses"></i> ${engineer.getRole()}
  </div>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item"> Email: ${engineer.email}</li>
    <li class="list-group-item"> GitHub: ${engineer.github}</li>
  </ul>
</div>
</div>`













module.exports = team => {
    return ``
}