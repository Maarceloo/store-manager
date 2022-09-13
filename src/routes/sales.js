const express = require('express');

const salesController = require('../controllers/salesController');

const productIdValidation = require('../middlewares/productIdValidation');
const productsIdDBValidation = require('../middlewares/productsIdDBValidation');
const quantityValidation = require('../middlewares/quantityValidation');
const salesIdValidation = require('../middlewares/salesIdValidation');

const salesRouter = express.Router();

salesRouter.post('/',
  productIdValidation,
  quantityValidation,
  productsIdDBValidation,
  salesController.newSalesController);

salesRouter.get('/', salesController.getAllSalesController);

salesRouter.get('/:id', salesIdValidation, salesController.getIdSalesController);

salesRouter.delete('/:id', salesIdValidation, salesController.deleteSalesControllers);

module.exports = salesRouter;