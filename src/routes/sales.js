const express = require('express');
const productIdDBValidation = require('../middlewares/productIdDBValidation');
const productIdValidation = require('../middlewares/productIdValidation');
const productsIdDBValidation = require('../middlewares/productsIdDBValidation');
const quantityValidation = require('../middlewares/quantityValidation');

const router = express.Router();

router.put('/',
  productIdValidation,
  quantityValidation,
  productIdDBValidation,
  productsIdDBValidation);

module.exports = router;