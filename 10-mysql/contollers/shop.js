const Product = require("../models/shop");

module.exports = function (req, res) {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("shop", { titlePage: "hello", data: rows });
    })
    .catch((err) => console.log(err));
};
