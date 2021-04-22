const { expect } = require("@jest/globals");
const { ecNormalize } = require("sshpk");
const Engineer = require("../lib/Engineer");

test("Create engineer", () => {
  const engineer = new Engineer("name", "role", "id", "email", "github")
  expect(engineer.getRole()).toBe('Engineer')
})

test("Github username", () => {
 const github = "killjoyangel2"
  const engineer = new Engineer("name", "role", "id", "email", GitHub)
  expect(engineer.getGitHub()).toBe(gitHub)
})
