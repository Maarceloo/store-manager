const connection = require('./connection');

const getAllProductsModels = async () => { 
  const [response] = await connection.execute(
    `SELECT * FROM StoreManager.products
     ORDER BY id;`,
  );
  return response;
};

  const postNewProductModels = async (product) => {
    const [response] = await connection
      .execute('INSERT INTO StoreManager.products(name) VALUES(?);', [product]);
  return response.insertId;
};

const getIdProductsModels = async (id) => {
  const [response] = await connection.execute(
    `SELECT * FROM StoreManager.products
     WHERE id='${id}';`,
  );
  return response;
};

module.exports = { getAllProductsModels, postNewProductModels, getIdProductsModels };