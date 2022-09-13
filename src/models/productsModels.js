const connection = require('./db/connection');

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

const changePostModels = async (id, name) => {
  const [response] = await connection.execute(
    'UPDATE StoreManager.products SET name = (?) WHERE id = (?)', [name, id],
  );
  return response;
 };

const deleteProductsModels = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = (?)', [id],
  );
  console.log(result);
  return result;
 };

module.exports = {
  getAllProductsModels,
  postNewProductModels,
  getIdProductsModels,
  changePostModels,
  deleteProductsModels,
};