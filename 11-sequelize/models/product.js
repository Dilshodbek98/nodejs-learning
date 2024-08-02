const sequelize = require("../utils/database");
const { DataTypes } = require("sequelize");
const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  price: DataTypes.INTEGER,
  imageUrl: DataTypes.STRING,
  description: DataTypes.STRING,
});

module.exports = Product;
