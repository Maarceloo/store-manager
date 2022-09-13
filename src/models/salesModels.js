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

const getAllSalesModels = async () => {
  const [response] = await connection.execute(
    `SELECT P.sale_id AS saleId, S.date, P.product_id AS productId, P.quantity 
      FROM StoreManager.sales AS S
      JOIN StoreManager.sales_products AS P 
      WHERE S.id = P.sale_id
      ORDER BY P.sale_id, P.product_id;`,
  );
  return response;
};

const getIdSalesModels = async (id) => {
  const [response] = await connection.execute(
    `SELECT S.date, P.product_id AS productId, P.quantity 
    FROM StoreManager.sales AS S
    JOIN StoreManager.sales_products AS P 
    ON P.sale_id = S.id
    WHERE P.sale_id = (?)
    ORDER BY P.product_id;
`, [id],
  );
  return response;
};

const deleteSalesModels = async (id) => {
   const [result] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = (?)', [id],
  );
  return result;
};

const changeSalesModels = async (productId, quantity) => {
    await connection.execute(
    'UPDATE StoreManager.sales_products SET quantity = (?) WHERE product_id = (?);',
    [quantity, productId],
  );
};

module.exports = {
  newSalesDateModels,
  addSalesDBModels,
  getAllSalesModels,
  getIdSalesModels,
  deleteSalesModels,
  changeSalesModels,
};
