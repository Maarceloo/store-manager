const express = require('express');
const { getAll, getId, newPost } = require('../controllers/products.controller');
const newProductValidation = require('../middlewares/newProductValidation');
const ProductExistValidation = require('../middlewares/ProductExistValidation');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getId);
router.post('/', newProductValidation, ProductExistValidation, newPost);

module.exports = router;