const productsModel = require('../models/productsModels');

const getAllProducts = async () => { 
  const result = await productsModel.getAllProductsModels();
  return result;
};

const newProducts = async (req) => {
  const { name } = req.body;
  const resultId = await productsModel.postNewProductModels(name);
  const [newObj] = await productsModel.getIdProductsModels(resultId);
  return newObj;
};

const getIdProducts = async (id) => {
  const [result] = await productsModel.getIdProductsModels(id);
  return result;
};

module.exports = { getAllProducts, newProducts, getIdProducts };