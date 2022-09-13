const salesModels = require('../models/salesModels');

const newSalesServices = async (sales) => {
  const salesID = await salesModels.newSalesDateModels();
  await sales.map((iten) => salesModels.addSalesDBModels(salesID, iten.productId, iten.quantity));
  const obj = {
    id: salesID,
    itemsSold: sales,
  };
  return obj;
};

const getAllSalesService = async () => {
  const result = await salesModels.getAllSalesModels();
  return result;
};
 
const getIdSalesServices = async (req) => { 
  const { id } = req.params;
  const result = await salesModels.getIdSalesModels(id);
  return result;
};

module.exports = { newSalesServices, getAllSalesService, getIdSalesServices };