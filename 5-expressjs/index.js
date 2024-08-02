const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const config = require("config");

// console.log(app.get("env"));

app.set("view engine", "pug");
app.set("views", "views");

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});

app.use(helmet());

// if (app.get("env") === "development") {
//   app.use(morgan("tiny"));
//   console.log("logger is working");
// }

app.get("/user", (req, res, next) => {
  res.render("user.html", { title: "user page", username: "dima" });
});

app.use((req, res, next) => {
  console.log("second middleware");
  // res.json("<h1>hello world</h1>");
  res.send("<h1>hello world</h1>");
  // res.send("hello world");
  // res.send({ message: "hello world" });
});

app.listen(3000, () => console.log(`server running`));
