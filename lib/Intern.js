const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school, Role) {
    super(name, id, email, Role) {
    this.School = school;

  getSchool() {

          return this.School;
  }        

 getRole(){
            return "Intern";
         }
   
        
    }}};
  
  module.exports = Intern;