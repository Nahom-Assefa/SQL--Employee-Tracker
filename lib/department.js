const db = require("../db/connection");
const inquirer = require("inquirer");
// const {listDepartment, departmentRecords } = require("./helperFunctions");

function department() {
  const sql = `SELECT department_name AS Department FROM departments`;
  console.log("line 6");

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
  });
}

function departmentQ() {
  inquirer
    .prompt([
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
        },
      },
    ])
    .then((added) => {
      addDepartment(added);
    });
}

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

  const display = `SELECT * FROM departments`;
  db.query(display, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
  });
}

function departmentByEmployee() {
  const sql = `select employees.*, job_title, department_name from employees 
  left join roles on employees.role_id = roles.id 
  left join departments on roles.department_id = departments.id; `;

  db.query(sql, (err, res) => {
      if (err) {
          throw err;
      }
      console.table(res);
  })
}

// function deleteInquiry() {
//     inquirer.prompt([
//         {
//             type: "list",
//             name: "deleteDepartment",
//             message: "Which department would you like to delete?",
//             choices: listDepartment
//         }
//     ])
//     .then(toDelete => {
//         deleteByDepartment(toDelete);
//     });
// };

// function deleteByDepartment(toDelete) {
//     console.log('line 87', toDelete);
//     const params = Object.values(toDelete);
//     console.log('line 89', params);
   
//     departmentRecords.forEach(record => {
//         console.log('record', record);
//     console.log('record Department', record.department_name);
//     console.log('equality', record.department_name === params[0]);
//         if (record.department_name === params[0]) {
//             params[0] = record.id;
//         };
//     });

    
//     console.log('line 101', params);
//     const sql = `DELETE FROM departments WHERE id = ?`;

//     db.query(sql, params, (err, res) => {
//         if (err) {
//             throw err;
//         }
//         console.table(res)
//     })

// }

module.exports = {
  department,
  departmentQ,
  addDepartment,
  departmentByEmployee,
};
