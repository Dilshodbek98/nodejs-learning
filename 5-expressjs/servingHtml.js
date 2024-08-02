const express = require("express");
const app = express();
const path = require("path");
const rootDir = require("./helpers/path");

app.use(express.json());
app.use(express.urlencoded());

app.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

app.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/products");
});

app.get("/products", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});
app.listen(3000);
