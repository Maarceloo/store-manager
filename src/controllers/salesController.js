const salesServices = require('../services/salesServices');

const newSalesController = async (req, res) => { 
  const result = await salesServices.newSalesServices(req); /* Salva no banco e retorna o novo objeto salvo */
  res.status(201).json(result);
 };

module.exports = { newSalesController };