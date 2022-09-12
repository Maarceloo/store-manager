const productsModels = require('../models/productsModels');

const productsIdDBValidation = async (req, res, next) => {
  const products = req.body;

  const allProducts = await productsModels.getAllProductsModels(); 

  const validationInDB = products.some((iten) => 
    allProducts.find((produtos) => produtos.id === iten.productId));

  if (!validationInDB) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  next();
};

module.exports = productsIdDBValidation;