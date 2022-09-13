// const sinon = require("sinon")
// const chai = require("chai")
// const { expect } = chai;
// const sinonChai = require("sinon-chai");
// chai.use(sinonChai)

// const productsModel = require('../../../src/models/productsModels');

// const { products, productsDB} = require('../models/mocks/productsAllMock');
// const connection = require("../../../src/models/connection");


// describe('Testes na unidade de ProductsModels', () => {

//   it('Realizando um GET em todos os produtos', async () => {

//     sinon.stub(connection, 'execute').resolves(productsDB)
//     await productsModel.getAllProductsModels();

//     expect(productsModel.getAllProductsModels).to.equals(products)
//   })

//   //   it('Realizando um GET pelo ID de um produto EXISTENTE', async () => {
//   //     const req = {params: {id: 1}, body: {}}
//   //     const res = {}

//   //     res.status = sinon.stub().returns(res)
//   //     res.json = sinon.stub().returns();

//   //     sinon.stub(productService, 'getIdProducts').resolves(productsDB[0])
//   //     await productControllers.getId(req, res);
//   //     sinon.restore()

//   //     expect(res.status).to.have.been.calledWith(200)
//   //     expect(res.json).to.have.been.calledWith(products[0])
//   //   })
  
//   // it('Realizando um GET pelo ID de um produto INEXISTENTE', async () => {
//   //     const req = {params: {id: 8}, body: {}}
//   //     const res = {}

//   //     res.status = sinon.stub().returns(res)
//   //     res.json = sinon.stub().returns();

//   //     sinon.stub(productService, 'getIdProducts').resolves()
//   //     await productControllers.getId(req, res);

//   //     expect(res.status).to.have.been.calledWith(404)
//   //     expect(res.json).to.have.been.calledWith({ message: 'Product not found' })
//   //   })
// })