const productsModels = require('../models/productsModels');
  
const ProductExistValidation = async (req, res, next) => {
  const { name } = req.body;
  const allProducts = await productsModels.getAllProductsModels(); 
  const key = allProducts.some((produto) => produto.name === name);
  if (key) {
    return res.status(400).json({ message: 'O "produto" ja esta cadastrado' });
  }
  return next();
};

module.exports = ProductExistValidation;