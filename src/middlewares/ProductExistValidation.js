const getAllProductsModels = require('../models/getAllProducts.models');
  
const ProductExistValidation = async (req, res, next) => {
  const { name } = req.body;
  const allProducts = await getAllProductsModels(); 
  const key = allProducts.some((produto) => produto.name === name);
  if (key) {
    return res.status(400).json({ message: 'O "produto" ja esta cadastrado' });
  }
  return next();
};

module.exports = ProductExistValidation;