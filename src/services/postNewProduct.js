const postNewProductModels = require('../models/postNewProductModels');

const newProducts = async (req) => {
  const { name } = req.body;
  const result = await postNewProductModels(name);
  return result[0];
};

module.exports = newProducts;