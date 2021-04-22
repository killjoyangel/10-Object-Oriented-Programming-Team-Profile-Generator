const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber, Role) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.Role = Role;
        }

    getOfficeNumber() {
      return this.officeNumber;
    }

    getRole() {
      return "Manager";
    }
}

  
  module.exports = Manager;
  