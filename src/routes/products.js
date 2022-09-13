const express = require('express');
const productsControler = require('../controllers/productsController');
const newProductValidation = require('../middlewares/newProductValidation');
const ProductExistValidation = require('../middlewares/ProductExistValidation');

const productsRouter = express.Router();

productsRouter.get('/', productsControler.getAll);
productsRouter.get('/:id', productsControler.getId);
productsRouter.post('/', newProductValidation, ProductExistValidation, productsControler.newPost);

module.exports = productsRouter;