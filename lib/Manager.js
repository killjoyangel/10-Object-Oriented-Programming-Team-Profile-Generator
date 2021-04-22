const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber, Role) {
        super(name, id, email) {
        this.officeNumber = officeNumber;
        this.Role = Role;
    }
    getRole() {
      return "Manager";
    }
      getOfficeNumber() {
      return this.officeNumber;
    }
    }};
  
  module.exports = Manager;
  