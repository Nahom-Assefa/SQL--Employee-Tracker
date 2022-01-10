const db = require("../db/connection");
const inquirer = require("inquirer");
const {
  listManager,
  listEmployees,
  employeeRecords,
  roleRecords,
  listRoles,
} = require("./helperFunctions");

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
  inquirer
    .prompt([
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
        message: "Which role does the employee belong too?",
        choices: listRoles,
      },
      {
        type: "list",
        name: "managername",
        message: "Which manager does the employee work under?",
        choices: listManager,
      },
    ])
    .then((added) => {
      addEmployees(added);
    });
}

function addEmployees(plusEmployee) {
  console.log("line 59", plusEmployee);
  const params = Object.values(plusEmployee);
  const managerName = plusEmployee.managername.split(" ");

  roleRecords.forEach((record) => {
    if (record.job_title === params[2]) {
      params[2] = record.id;
    }
  });

  employeeRecords.forEach((record) => {
    if (record.last_name === managerName[1]) {
      params[3] = record.id;
    }
  });

  console.log("line 73", params);

  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                      VALUES(?, ?, ?, ?)`;
  db.query(sql, params, (err, res) => {
    if (err) {
      throw err;
    }
    console.table(res);
  });

  const display = `SELECT * FROM employees`;
  db.query(display, (err, res) => {
    if (err) {
      throw err;
    }
    console.table(res);
  });
}

//----------------------------------------------------------------------------------

function updateEmployeesQ() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "updatedRoleId",
        message: "Which role does the employee belong too?",
        choices: listRoles,
      },
      {
        type: "list",
        name: "updatedManagerId",
        message: "Which Manager does the employee work under?",
        choices: listManager,
      },
      {
        type: "list",
        name: "updatedPositionId",
        message: "What is the name of the employee you'd like to update?",
        choices: listEmployees,
      },
    ])
    .then((update) => {
      updateEmployee(update);
    });
}

function updateEmployee(updatedEmployee) {
  console.log("line 119", updatedEmployee);
  const params = Object.values(updatedEmployee);
  const managerName = updatedEmployee.updatedManagerId.split(" ");
  const employeeName = updatedEmployee.updatedPositionId.split(" ");

  roleRecords.forEach((record) => {
    if (record.job_title === params[0]) {
      params[0] = record.id;
    }
  });

  employeeRecords.forEach((record) => {
    if (record.last_name === managerName[1]) {
      params[1] = record.id;
    }
  });

  employeeRecords.forEach((record) => {
    if (record.last_name === employeeName[1]) {
      params[2] = record.id;
    }
  });

  console.log("line 129", params);

  const sql = `UPDATE employees SET role_id = ?, Manager_id = ?
                      WHERE id = ?`;

  db.query(sql, params, (err, res) => {
    if (err) {
      throw err;
    }
    console.table(res);
  });

  const display = `SELECT * FROM employees`;

  db.query(display, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
  });
};

function employeesByManager() {
    const sql = ``
}

module.exports = {
  employees,
  employeesQ,
  updateEmployeesQ,
};
