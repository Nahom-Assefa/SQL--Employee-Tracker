const db = require("../db/connection");
const inquirer = require("inquirer");
const {
  listDepartment,
  departmentRecords,
} = require("./helperFunctions");

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
  inquirer
    .prompt([
      {
        type: "input",
        name: "jobTitle",
        message: "What is the job title of the role?",
      },
      {
        type: "list",
        name: "departmentId",
        message: "What department does this job belongs too?",
        choices: listDepartment,
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this position?",
      },
    ])
    .then((added) => {
      addRole(added);
    });
}

function addRole(roleEntry) {
  console.log("line 56", roleEntry);
  const params = Object.values(roleEntry);
  console.log("line 58", params);
  console.log('department', departmentRecords);
  
  departmentRecords.forEach((record) => {
    console.log('record', record);
    console.log('record Department', record.department_name);
    console.log('equality', record.department_name === params[1]);
    if (record.department_name === params[1]) {
        params[1] = record.id;
    }
  });


  console.log('params', params);

  const sql = `INSERT INTO roles(job_title, department_id, salary)
                VALUES(?,?,?)`;

  db.query(sql, params, (err, res) => {
    if (err) {
      throw err;
    }
    console.table(res);
  });

  const display = `SELECT * FROM roles`;
  db.query(display, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
  });
}

module.exports = {
  roles,
  rolesQ,
  addRole,
};
