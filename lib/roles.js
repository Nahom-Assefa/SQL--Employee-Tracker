const db = require("../db/connection");
const inquirer = require("inquirer");

function roles() {
  const sql = `SELECT * FROM roles`;

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
  });
}

function rolesQ() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "jobTitle",
        message: "Enter the job you would like to add for the role?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter a valid role!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "departmentId",
        message: "What is the department id this job belongs too?",
        choices: [1, 2, 3, 4, 5, 6],
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this position?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter a salary!");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      addRole(answer);
    });
}

function addRole(roleEntry) {
  const params = Object.values(roleEntry);
  console.log("line 67", params);
  const sql = `INSERT INTO roles(job_title, department_id, salary)
                VALUES(?,?,?)`;

  db.query(sql, params, (err, res) => {
    if (err) {
      throw err;
    }
    console.table(res);
  });
}

module.exports = {
  roles,
  rolesQ,
  addRole,
};
