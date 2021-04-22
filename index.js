const Employee = require("./lib/Employee");
const Employee = new Team ();


const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

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



inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'Role',
      message: 'What is your job title?',
    },
    {
      type: 'input',
      name: 'OfficeNumber',
      message: 'What is your OfficeNumber number?',
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

  .then((Manager, Engineer, Intern) => {
    const htmlPageContent = generateHTML(Manager, Engineer, Intern);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


  
module.exports = team => {
  return ``
}


