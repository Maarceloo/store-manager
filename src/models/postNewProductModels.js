const connection = require('./connection');

const postNewProductModels = async (product) => {
  await connection.execute('INSERT INTO StoreManager.products(name) VALUES(?)', [product]);
  const [response] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name=?;', [product],
  );
  return response;
};

module.exports = postNewProductModels;