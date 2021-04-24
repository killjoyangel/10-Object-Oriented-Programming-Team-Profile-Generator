const generateManager = (answers) => {
  return`<div class="col">
  <div id="answers" class="card" style="width: 18rem;">
  <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
  <p>${answers.getname()}</p>
  <i class="fas fa-mug-hot"></i> ${answers.getRole()}
  </div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${answers.getid()}</li>
    <li class="list-group-item"> Email: ${answers.getemail()}</li>
    <li class="list-group-item"> Office number: ${answers.getOfficeNumber()}</li>
  </ul>
  </div>
  </div>`
  };

 