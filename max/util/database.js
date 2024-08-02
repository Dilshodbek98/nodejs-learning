const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "mydb",
  password: "3641264db@",
});

module.exports = pool.promise();
