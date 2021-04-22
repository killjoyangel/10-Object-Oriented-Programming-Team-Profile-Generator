const { expect } = require("@jest/globals");
const { ecNormalize } = require("sshpk");
const Intern = require("../lib/Intern");

test("Create Intern", () => {
  const inte = new Intern("name", "role", "id", "email", "school");
  expect(inte.getRole()).toBe("Intern");
});

test("Intern's school", () => {
  const School = "school of hard knocks";
  const intern = new Intern("name", "id", "email", School, "role");
  expect(intern.getschool()).toBe(School);
});
