const salesModels = require('../models/salesModels');

const salesIdValidation = async (req, res, next) => { 
  const { id } = req.params;
  const allSales = await salesModels.getAllSalesModels();
  const key = allSales.find((sale) => sale.saleId === Number(id));
  if (!key) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return next();
};

module.exports = salesIdValidation;