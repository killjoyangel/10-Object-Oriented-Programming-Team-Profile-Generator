const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github, Role) {
    super(name, id, email, Role) {
    this.github = github;

    get github() {

    return "github";
    }}}};
  
  module.exports = Engineer;

