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

const deleteSalesServices = async (req) => {
  const { id } = req.params;
  const result = await salesModels.deleteSalesModels(id);
  return result;
};

const changeSalesServices = async (req) => {
  const { id } = req.params;
  const sales = req.body;

  await sales.map(
    (iten) => salesModels.changeSalesModels(iten.productId, iten.quantity),
  );
  
  const obj = {
    saleId: Number(id),
    itemsUpdated: sales,
  };

  return obj;
 };

module.exports = {
  newSalesServices,
  getAllSalesService,
  getIdSalesServices,
  deleteSalesServices,
  changeSalesServices,
};