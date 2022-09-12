const productsModels = require('../models/productsModels');
  
const productIdDBValidation = async (req, res, next) => {
  const { productId } = req.body;
  const allProducts = await productsModels.getAllProductsModels(); 
  
  const key = allProducts.find((produto) => produto.id === productId);
  if (!key) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return next();
};

module.exports = productIdDBValidation;