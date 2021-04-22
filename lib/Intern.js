const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school, Role) {
    super(name, id, email, Role) {
    this._school = school;

  get _school() {

          return "_school";
    }}}};
  
  module.exports = Intern;