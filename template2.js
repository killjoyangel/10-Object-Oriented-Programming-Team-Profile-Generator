const Manager = require("./lib/Manager")
const generatemananger = Manager => {
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


module.exports = team => {
    return ``
}