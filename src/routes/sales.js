const express = require('express');
const productIdValidation = require('../middlewares/productIdValidation');
const productsIdDBValidation = require('../middlewares/productsIdDBValidation');
const quantityValidation = require('../middlewares/quantityValidation');
const salesController = require('../controllers/salesController');

const salesRouter = express.Router();

salesRouter.post('/',
  productIdValidation,
  quantityValidation,
  productsIdDBValidation,
  salesController.newSalesController);

module.exports = salesRouter;