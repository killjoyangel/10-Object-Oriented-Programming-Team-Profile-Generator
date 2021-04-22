const { expect } = require("@jest/globals");
const { ecNormalize } = require("sshpk");
const Manager = require("../lib/Manager");

test("Create Manager", () => {
  const boss = new Manager("name", "id", "email", "role", "officeNumber");
  expect(boss.getRole()).toBe("Manager");
});

test("Office Number", () => {
  const officeNumber = 1;
  const boss = new Manager("name", "id", "email", "officeNumber", "role");
  expect(boss.getGitHub()).toBe(officeNumber);
});
