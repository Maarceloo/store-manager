const getAllProducts = require('../services/getAllProducts');
const getIdProducts = require('../services/getIdProducts');
const newProducts = require('../services/postNewProduct');

const getAll = async (_req, res) => {
  const resposta = await getAllProducts();
  res.status(200).json(resposta);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const resposta = await getIdProducts(id);
  if (resposta.length < 1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(resposta[0]);
};

const newPost = async (req, res) => { 
  const result = await newProducts(req); /* Salva no banco e retorna o novo objeto salvo */
  res.status(201).json(result);
 };

module.exports = { getAll, getId, newPost };