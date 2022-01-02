const db = require("../db/connection");
const inquirer = require("inquirer");

function employees() {
  const sql = `SELECT * FROM employees`;

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
  });
}

function employeesQ() {
  inquirer.prompt([
    {
      type: "input",
      name: "employeeFirstName",
      message: "What is the first name of the employee?",
    },
    {
      type: "input",
      name: "employeeLastName",
      message: "What is the last name of the employee?",
    },
    {
      type: "list",
      name: "roleId",
      message: "Which role id does the employee belong too",
      choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      type: "confirm",
      name: "confirmManager",
      message: "Does the employee have a manager?",
      default: false,
    },
    {
      type: "list",
      name: "managerId",
      message: "Which manager id does the employee belong too",
      choices: [1, 2],
      when: ({ confirmManager }) => {
        if (confirmManager) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]).then(answers => {addEmployees(answers)});
}

function addEmployees (answers) {
    const params = Object.values(answers);
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                    VALUES(?, ?, ?, ?)`;

    db.query(sql, params, (err, res) => {
        if (err) {
            throw err;
        } 
    console.table(res);
    })
}

module.exports = {
  employees,
  employeesQ,
};
