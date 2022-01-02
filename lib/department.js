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
        message: "What will be the department name",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the department name");
            return false;
          }
        },
      },
    ]).then(answer => {addDepartment(answer)});
  };

function addDepartment(ans) {
  const name = Object.values(ans);
  const sql = `INSERT INTO departments (department_name)
                    VALUES (?)`;

  db.query(sql, name, (err, res) => {
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
