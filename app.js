const { prompt } = require("inquirer");
const { department, departmentQ } = require("./lib/department");
const { roles, rolesQ } = require("./lib/roles");
const { employees, employeesQ, updateEmployeesQ } = require("./lib/employees");

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
      "update an employee role",
    ],
  },
];


function init() {
  prompt(initialQ).then((ans) => {
    console.log('line 42', ans.choices);
    switch (ans.choices) {
      case "view all departments":
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
        rolesQ();
        break;
      case "add an employee":
        employeesQ();
        break;
      case "update an employee role":
        updateEmployeesQ();
        break;
    }
  });
}

init();

module.exports = {init};