const productService = require('../services/productService');

const getAllControllers = async (_req, res) => {
  const resposta = await productService.getAllProductsServices();
  res.status(200).json(resposta);
};

const getIdControllers = async (req, res) => {
  const { id } = req.params;
  const resposta = await productService.getIdProductsServices(id);
  if (!resposta) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(resposta);
};

const newPostControllers = async (req, res) => { 
  const result = await productService.newProductsServices(req); /* Salva no banco e retorna o novo objeto salvo */
  res.status(201).json(result);
 };

const changePostControllers = async (req, res) => { 
  const result = await productService.changePostServices(req);
  res.status(200).json(result);
};

const deleteProductsControllers = async (req, res) => { 
  await productService.deleteProductsServices(req);
  res.status(204).json();
};

const seachGetControllers = async (req, res) => {
  const result = await productService.seachGetServices(req);
  res.status(200).json(result);
};

module.exports = {
  getAllControllers,
  getIdControllers,
  newPostControllers,
  changePostControllers,
  deleteProductsControllers,
  seachGetControllers,
};