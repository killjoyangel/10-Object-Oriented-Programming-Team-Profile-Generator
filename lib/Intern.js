const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school, Role) {
    super(name, id, email, Role);
    this.school = school;
    }

  getschool() {
    return this.school;
  }        

 getRole() {
    return "Intern";
 }
}
  
  module.exports = Intern;