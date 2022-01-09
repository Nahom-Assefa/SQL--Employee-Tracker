const db = require("../db/connection");

// Global array values to export
let listManager = [];
let listEmployees = [];
let employeeRecords = [];
let listDepartment = [];
let departmentRecords = [];
let listRoles = [];
let roleRecords = [];
let listSalary = [];

// Functions to query database to make inquirer questions dynamic
function queryRoles() {
  const sql = `SELECT id, job_title FROM roles`;
  db.query(sql, (err, res) => {
    if (err) {
      throw err;
    }

    res.forEach(({ job_title }) => {
      listRoles.push(job_title);
    });

    res.forEach(({ id, job_title }) => {
      roleRecords.push({ id, job_title });
    });
  });
};

queryRoles();

function queryDepartment() {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, res) => {
    if (err) {
      throw err;
    }

    res.forEach(({ department_name }) => {
      listDepartment.push(department_name);
    });

    res.forEach(({ id, department_name }) => {
      departmentRecords.push({ id, department_name });
    });
  });
}

queryDepartment();

function queryManager() {
  const sql = `SELECT id, first_name, last_name FROM employees`;
  db.query(sql, (err, res) => {
    if (err) {
      throw err;
    }
    // get first and last name for managers
    let managers = [];
    res.forEach(({ first_name, last_name }) => {
      if (first_name === "James" && last_name === "Fraser") {
        const manager1 = { first_name, last_name };
        managers.push(Object.values(manager1));
      };
      if (first_name === "Jack" && last_name === "London") {
        const manager2 = { first_name, last_name };
        managers.push(Object.values(manager2));
      };
      if (first_name === "Robert" && last_name === "Bruce") {
        const manager3 = { first_name, last_name };
        managers.push(Object.values(manager3));
      };
      if (first_name === "Peter" && last_name === "Greenaway") {
        const manager4 = { first_name, last_name };
        managers.push(Object.values(manager4));
      };
    });
    // join first and last name of each manager as one array index position
    const firstManager = managers[0].join(" ");
    const secondmanager = managers[1].join(" ");
    const thirdmanager = managers[2].join(" ");
    const fourthmanager = managers[3].join(" ");
    console.log("line 72", firstManager);
    // push values to global array listManager
    listManager.push(firstManager, secondmanager, thirdmanager, fourthmanager);
    console.log("line 64", listManager);

    res.forEach(({ id, first_name, last_name }) => {
      employeeRecords.push({ id, first_name, last_name });
    });
  });
}

queryManager();

function queryEmployees() {
  const sql = `SELECT first_name, last_name FROM employees`;
  db.query(sql, (err, res) => {
    if (err) {
      throw err;
    }

    res.forEach(({ first_name, last_name }) => {
      const employees = { first_name, last_name };
      listEmployees.push(Object.values(employees).join(" "));
    });
  });
}

queryEmployees();

// function salary() {
//   const sql = `SELECT salary FROM roles`;
//   db.query(sql, (err, res) => {
//     if (err) {
//       throw err;
//     }
//     res.forEach(({ salary }) => {
//       listSalary.push(salary);
//     });
//   });
// }

// salary();

module.exports = {
  listManager,
  listEmployees,
  employeeRecords,
  listDepartment,
  departmentRecords,
  listRoles,
  roleRecords,
  listSalary,
};
