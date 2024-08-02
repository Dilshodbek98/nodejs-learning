const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("this middleware always works");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("/users middleware is working");
  res.send(`
    <h1>Users</h1>
    <ul>
        <li>Dilshodbek</li>
        <li>Shoxrux</li>
        <li>Diyorbek</li>
    </ul>
`);
});

app.use("/", (req, res, next) => {
  console.log("/ middleware is working");
  res.send("hello express");
});

app.listen(3000, () => console.log("server listening on 3000"));
