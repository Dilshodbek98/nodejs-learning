const express = require("express");
const shopRouter = require("./routes/shop");
const app = express();
const sequelize = require("./utils/database");
const Product = require("./models/product");
const User = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/shop", shopRouter);

Product.belongsTo(User, { onDelete: "CASCADE" });
User.hasMany(Product);
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log("Database connected succefully");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }
// testConnection();

async function syncDatabase() {
  await sequelize.sync({ force: true });
  // await sequelize.sync({ force: true });
}

syncDatabase()
  .then(() => {
    co  nsole.log("Database synced.");
    app.listen(3000, () => console.log("server is running"));
  })
  .catch((err) => console.log(err));
