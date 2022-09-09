const getAllProductsModels = require('../models/getAllProducts.models');

const getAllProducts = async () => { 
  const result = await getAllProductsModels();
  return result;
};

module.exports = getAllProducts;