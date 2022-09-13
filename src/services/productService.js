const productsModel = require('../models/productsModels');

const getAllProductsServices = async () => { 
  const result = await productsModel.getAllProductsModels();
  return result;
};

const newProductsServices = async (req) => {
  const { name } = req.body;
  const resultId = await productsModel.postNewProductModels(name);
  const [newObj] = await productsModel.getIdProductsModels(resultId);
  return newObj;
};

const getIdProductsServices = async (id) => {
  const [result] = await productsModel.getIdProductsModels(id);
  return result;
};

const changePostServices = async (req) => { 
  const { id } = req.params;
  const { name } = req.body;
  await productsModel.changePostModels(id, name);
  const result = {
    id,
    name,
  };
  return result;
};

const deleteProductsServices = async (req) => { 
  const { id } = req.params;
  const result = await productsModel.deleteProductsModels(id);
  return result;
};

const seachGetServices = async (req) => {
  const { q } = req.query;
  const allProducts = await productsModel.getAllProductsModels();
  console.log(q);

  if (!q) {
    return allProducts;
  }

  const result = allProducts.filter((iten) => iten.name.includes(q));
  return result;
};

module.exports = {
  getAllProductsServices,
  newProductsServices,
  getIdProductsServices,
  changePostServices,
  deleteProductsServices,
  seachGetServices,
};