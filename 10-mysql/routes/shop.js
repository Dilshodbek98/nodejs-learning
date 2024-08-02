const express = require("express");
const shopController = require("../contollers/shop");
const router = express.Router();

router.get("/", shopController);

module.exports = router;
