const salesServices = require('../services/salesServices');

const newSalesController = async (req, res) => { 
  const sales = req.body;
  const result = await salesServices.newSalesServices(sales); /* Salva no banco e retorna o novo objeto salvo */
  res.status(201).json(result);
 };

const getAllSalesController = async (_req, res) => {
  const result = await salesServices.getAllSalesService();
  res.status(200).json(result);
 };

const getIdSalesController = async (req, res) => { 
  const result = await salesServices.getIdSalesServices(req);
  res.status(200).json(result);
 };

const deleteSalesControllers = async (req, res) => {
  const result = await salesServices.deleteSalesServices(req);
  if (result) res.status(204).json();
};

module.exports = {
  newSalesController,
  getAllSalesController,
  getIdSalesController,
  deleteSalesControllers,
};