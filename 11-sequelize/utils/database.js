const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb", "root", "3641264Db@", {
  host: "127.0.0.1",
  dialect: "mysql",
  dialectModule: require("mysql2"),
});

module.exports = sequelize;
