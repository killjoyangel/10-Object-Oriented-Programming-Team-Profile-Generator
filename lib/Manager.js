const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber, Role) {
        super(name, id, email) {
        this.officeNumber = officeNumber;
        this.Role = Role;
    }
    get Role() {
      return "Manager";
    }
      get OfficeNumber() {
      return this.officeNumber;
    }
    }};
  
  module.exports = Manager;