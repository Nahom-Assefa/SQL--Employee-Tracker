const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jadeboor305!',
    database: 'CMS'
},
console.log("Connected to the CMS database.")
);

connection.connect();

module.exports = connection;

