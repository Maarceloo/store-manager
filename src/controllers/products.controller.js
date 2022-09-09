const getAllProducts = require('../services/getAllProducts');
const getIdProducts = require('../services/getIdProducts');

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

module.exports = { getAll, getId };