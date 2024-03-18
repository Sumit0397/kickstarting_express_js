const express = require('express');

const prductsController = require('../controllers/products');

const router = express.Router();

router.get("/add-product", prductsController.prdocutForm);

router.post("/add-product" , prductsController.getProduct);


module.exports = router;