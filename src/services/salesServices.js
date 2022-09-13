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

module.exports = { newSalesServices };