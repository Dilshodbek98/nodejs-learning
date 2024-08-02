const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../", "public")));

app.get("/", function (req, res, next) {
  console.log(path.join(__dirname, "../", "5-expressjs", "public"));
  res.send(`<img src="public/1111.jpg"/>`);
});

app.listen(3000);
