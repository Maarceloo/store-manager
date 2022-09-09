const connection = require('./connection');

const getIdProductsModels = async (id) => {
  const [response] = await connection.execute(
    `SELECT * FROM StoreManager.products
     WHERE id='${id}';`,
  );
  return response;
};

module.exports = getIdProductsModels;