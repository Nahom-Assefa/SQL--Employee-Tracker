const db = require("../db/connection");
const inquirer = require('inquirer');

function department() {
  const sql = `SELECT department_name AS Department FROM departments`;
  console.log("line 6");

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
  });
};

function departmentQ () {
    return inquirer.prompt([
      {
        type: "input",
        name: "departmentInput",
        message: "Please enter the department name",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter a valid department name!");
            return false;
          }
        }
      },
    ]).then(answer => {addDepartment(answer)});
  };

function addDepartment(deptEntry) {
  const params = Object.values(deptEntry);
  const sql = `INSERT INTO departments (department_name)
                    VALUES (?)`;

  db.query(sql, params, (err, res) => {
    if (err) {
      throw err;
    }
    console.table(res);
  });
};


module.exports = {
  department,
  departmentQ,
  addDepartment,
};
