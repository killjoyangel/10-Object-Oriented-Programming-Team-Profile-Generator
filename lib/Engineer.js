//class engineer {
    //constructor (name, department, id, email, office) {
   // this._name = name;
    //this._department = department;
  //  this._email = email;
   // this._id = id;
   // this._office = office;//

const Employee = require("./Employee");

class engineer extends Employee {
    constructor (name, id, email, github, Role) {
    super(name, id, email, Role) {
    this.github = github;

  get github() {
      
          return "github";
    }}}};
  
  module.exports = Manager;