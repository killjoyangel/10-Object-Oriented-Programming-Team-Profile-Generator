const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, Role) {
    super(name, Role);
    this.gitHub = github;
    this.email = email
    this.id = id
  }
  getGitHub() {
    return this.gitHub;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;