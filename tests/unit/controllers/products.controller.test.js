// const { expect } = require('chai');
// const sinon = require('sinon');
// const { getAll, getId } = require('../../../src/controllers/products.controller');
// const connection = require('../../../src/models/connection');
// const getIdProducts = require('../../../src/services/getIdProducts');
// const productsDB = require('../models/mocks/productsAll.mock');

// describe('teste de unidade productControllers', () => {

//   it('Realizando um GET em todos os produtos', async () => {
//     sinon.stub(connection, 'execute').resolves(productsDB)
//     const result = await getAll();
//     console.log(result);
//     expect(result).tequal(productsDB)
//   })

//     it('Realizando um GET pelo ID de um produto EXISTENTE', async () => {
//     sinon.stub(connection, 'execute').resolves(productsDB)
//     const req = {params: {id: 1}}
//     const result = await getId(req);
//     expect(result).to.be.deep.equal(productsDB[0])
//     })
  
//     it('Realizando um GET pelo ID de um produto INEXISTENTE', async () => {
//     sinon.stub(connection, 'execute').resolves(productsDB)
//     const req = {params: {id: 8}}
//     const result = await getId(req);
//     expect(result).to.be.deep.equal({ message: 'Product not found' })
//   })
// })