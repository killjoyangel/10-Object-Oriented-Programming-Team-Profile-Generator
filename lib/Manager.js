const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber, Role) {
        super(name, id);
        this.officeNumber = officeNumber;
        this.Role = Role;
        this.email = email
        this.id = id
        }

    getOfficeNumber() {
      return this.officeNumber;
    }

    getRole() {
      return "Manager";
    }
}

  
  module.exports = Manager;
  