const express = require("express");
const db = require("./database/db");
const shopRouter = require("./routes/shop");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/shop", shopRouter);

// db.execute("SELECT * FROM users")
//   .then((res) => console.log(res, "res"))
//   .catch((err) => console.log(err, "err"));

app.listen(3000, () => console.log("server is running now"));
