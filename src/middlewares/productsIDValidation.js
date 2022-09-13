const productsModels = require('../models/productsModels');

const productsIDValidation = async (req, res, next) => {
  const { id } = req.params;

  const validation = await productsModels.getIdProductsModels(id); 

  if (!validation.length) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = productsIDValidation;