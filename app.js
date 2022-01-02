const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const { department, departmentQ } = require("./lib/department");
const {roles, addRoles} = require('./lib/roles');

const initialQ = [
  {
    type: "list",
    name: "choices",
    message: "What would you like to do?",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "and update an employee role",
    ],
  },
];



function init() {
  prompt(initialQ).then((ans) => {
    console.log('line 42', ans.choices);
    switch (ans.choices) {
      case "view all departments":
        console.log(ans);
        department();
        break;
      case "view all roles":
        roles();
        break;
      case "view all employees":
        employees();
        break;
      case "add a department":
        departmentQ();
        break;
      case "add a role":
        addRole();
        break;
      case "add an employee":
        addEmployee();
        break;
      case "and update an employee role":
        addUpdate();
        break;
    }
  });
}

init();