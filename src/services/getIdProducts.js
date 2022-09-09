const getIdProductsModels = require('../models/getIdProducts.models');

const getIdProducts = async (id) => {
  const result = await getIdProductsModels(id);
  return result;
};

module.exports = getIdProducts;