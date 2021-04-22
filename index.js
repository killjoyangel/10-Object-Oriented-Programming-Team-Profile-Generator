const Employee = require("./lib/Employee");
const Team = new Employee ();


const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHTML = require("./src/generateHTML");

const theATeam = [];
const questionsManager = [{
        type: "input",
        name: "name",
        message: "What is the A-team's manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the A-team's manager's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the A-team's manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the A-team's manager's office number?",
    },
    {
        type: "list",
        name: "team",
        message: "Do you want to add a member to the A-Team? If yes, pick their role.",
        choices: ["Engineer", "Intern", "Team is full"],
    },
];

const askEngineer = () => {
  inquirer
      .prompt([{
              type: "input",
              name: "name",
              message: "What is this A-team's engineer's name?",
          },
          {
              type: "input",
              name: "id",
              message: "What is this A-team's engineer's id?",
          },
          {
              type: "input",
              name: "email",
              message: "What is this A-team's engineer's email?",
          },
          {
              type: "input",
              name: "GitHub",
              message: " What is this A-team's engineer's GitHub username?",
          },
          {
              type: "list",
              name: "team",
              message: "Which type of team member would you like to add?",
              choices: ["Engineer", "Intern", "Team is full"],
          },
      ])
      .then((answers) => {
        theATeam.push(
            new Engineer(answers.name, answers.id, answers.email, answers.GitHub)
        );
        if (answers.team === "Engineer") {
            askEngineer();
        } else if (answers.team === "Intern") {
            askIntern();
        } else {
            let answers = generateHTML(theATeam);
            fs.writeFileSync("team.html", answers, "utf-8");
        }
    });
  };


  const askIntern = () => {
      inquirer
          .prompt([{
                  type: "input",
                  name: "name",
                  message: "What is the A-team's intern's name?",
              },
              {
                  type: "input",
                  name: "id",
                  message: "What is the A-team's intern's id?",
              },
              {
                  type: "input",
                  name: "email",
                  message: "What is the A-team's intern's email?",
              },
              {
                  type: "input",
                  name: "school",
                  message: "What is the A-team's intern's school?",
              },
              {
                  type: "list",
                  name: "team",
                  message: "Which type of team member would you like to add?",
                  choices: ["Engineer", "Intern", "Team is full"],
              },
            ]).then((answers) => {
              theATeam.push(
                  new Intern(answers.name, answers.id, answers.email, answers.school)
              );
              if (answers.team === "Engineer") {
                  askEngineer();
              } else if (answers.team === "Intern") {
                  askIntern();
              } else {
                  let answers = generateHTML(theATeam);
                  fs.writeFileSync("team.html", answers, "utf-8");
              }
          });
  };

  const init = () => {
    inquirer.prompt(questionsManager).then((answers) => {
        teamMembers.push(
            new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        );
        if (answers.members === "Engineer") {
            askEngineer();
        } else if (answers.members === "Intern") {
            askIntern();
        } else {
            //end function here and generateHTML
            let answers = generateHTML(teamMembers);
            fs.writeFileSync("team.html", answers, "utf-8");
        }
    });
};
/**FUNCTION CALLS*****************************/
init();



