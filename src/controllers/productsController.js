const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const resposta = await productService.getAllProducts();
  res.status(200).json(resposta);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const resposta = await productService.getIdProducts(id);
  if (!resposta) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(resposta);
};

const newPost = async (req, res) => { 
  const result = await productService.newProducts(req); /* Salva no banco e retorna o novo objeto salvo */
  res.status(201).json(result);
 };

module.exports = { getAll, getId, newPost };