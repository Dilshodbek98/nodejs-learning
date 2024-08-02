const express = require("express");
const shopController = require("../controllers/shopController");
const router = express.Router();

router.get("/", shopController.getAllProducts);

router.get("/:prodId", shopController.getOneProduct);

router.post("/", shopController.addProduct);

router.put("/:prodId", shopController.updateProduct);

router.delete("/:prodId", shopController.deleteProduct);

module.exports = router;
