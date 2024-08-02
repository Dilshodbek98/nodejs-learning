const express = require("express");
const app = express();
const admin = require("./routes/admin");
const shop = require("./routes/shop");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin", admin);
app.use(shop);
app.use((req, res, next) => {
  res.status(500).send("<h1>page not found</h1>");
});
app.listen(3000);
