const db = require("../database/db");

class Product {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  save() {}

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static fetchById(id) {}
}
module.exports = Product;
