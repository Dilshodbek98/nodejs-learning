const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  database: "mydb",
  password: "3641264Db@",
});

module.exports = pool.promise();
