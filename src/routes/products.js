const express = require('express');
const productsControler = require('../controllers/productsController');
const newProductValidation = require('../middlewares/newProductValidation');
const ProductExistValidation = require('../middlewares/ProductExistValidation');

const router = express.Router();

router.get('/', productsControler.getAll);
router.get('/:id', productsControler.getId);
router.post('/', newProductValidation, ProductExistValidation, productsControler.newPost);

module.exports = router;