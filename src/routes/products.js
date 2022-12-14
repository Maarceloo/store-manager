const express = require('express');
const productsControler = require('../controllers/productsController');
const newProductValidation = require('../middlewares/newProductValidation');
const ProductExistValidation = require('../middlewares/ProductExistValidation');
const productsIDValidation = require('../middlewares/productsIDValidation');

const productsRouter = express.Router();

productsRouter.get('/search', productsControler.seachGetControllers);

productsRouter.get('/', productsControler.getAllControllers);

productsRouter.get('/:id', productsControler.getIdControllers);

productsRouter.post('/',
  newProductValidation,
  ProductExistValidation,
  productsControler.newPostControllers);

productsRouter.put('/:id',
  newProductValidation,
  productsIDValidation,
  productsControler.changePostControllers);

productsRouter.delete('/:id', productsIDValidation, productsControler.deleteProductsControllers);
  
module.exports = productsRouter;