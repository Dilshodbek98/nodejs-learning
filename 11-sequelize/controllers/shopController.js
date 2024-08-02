const ProductModel = require("../models/product");

class ShopController {
  constructor() {}

  async getAllProducts(req, res, next) {
    const products = await ProductModel.findAll();
    res.status(200).json(products);
  }

  async addProduct(req, res, next) {
    const { title, price, imageUrl, description } = req.body;
    const result = await ProductModel.create({
      title,
      price,
      imageUrl,
      description,
    });
    res.status(201).json(result);
  }

  async getOneProduct(req, res, next) {
    const product = await ProductModel.findByPk(req.params.prodId);
    res.status(200).json(product);
  }

  async updateProduct(req, res, next) {
    const updatedProducts = await ProductModel.update(req.body, {
      where: { id: req.params.prodId },
    });
    const allProducts = await ProductModel.findAll();
    res.status(200).json(allProducts);
  }

  async deleteProduct(req, res, next) {
    const result = await ProductModel.destroy({
      where: { id: req.params.prodId },
    });
    const allProducts = await ProductModel.findAll();
    res.status(200).json(allProducts);
  }
}

module.exports = new ShopController();
