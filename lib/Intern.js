const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school, Role) {
    super(name, Role);
    this.email = email;
    this.school = school;
    this.id = id;
    }

  getschool() {
    return this.school;
  }        

 getRole() {
    return "Intern";
 }
}
  
  module.exports = Intern;