const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, Role) {
    super(name, id, email, Role);
    this.gitHub = github;
  }
  getGitHub() {
    return this.gitHub;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;