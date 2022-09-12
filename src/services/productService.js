const productsModel = require('../models/productsModels');

const getAllProducts = async () => { 
  const result = await productsModel.getAllProductsModels();
  return result;
};

const newProducts = async (req) => {
  const { name } = req.body;
  const result = await productsModel.postNewProductModels(name);
  return result[0];
};

const getIdProducts = async (id) => {
  const result = await productsModel.getIdProductsModels(id);
  return result;
};

module.exports = { getAllProducts, newProducts, getIdProducts };