const connection = require('./connection');

const getAllProductsModels = async () => { 
  const [response] = await connection.execute(
    `SELECT * FROM StoreManager.products
     ORDER BY id;`,
  );
  return response;
};

module.exports = getAllProductsModels;