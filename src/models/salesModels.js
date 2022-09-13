const connection = require('./db/connection');

const newSalesDateModels = async () => {
  const [response] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );
  return response.insertId;
};

const addSalesDBModels = async (id, productId, quantity) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity)VALUES (?, ?, ?);',
    [id, productId, quantity],
  );
};

module.exports = { newSalesDateModels, addSalesDBModels };
