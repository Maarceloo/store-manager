const express = require('express');
const { getAll, getId } = require('../controllers/products.controller');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getId);

module.exports = router;