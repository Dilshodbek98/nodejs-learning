const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "templates");

app.get("/", (req, res) => {
  res.render("products", { title: "Product", name: "APPLE" });
});

app.listen(3000, () => console.log("listening"));
