const sinon = require("sinon")
const chai = require("chai")
const { expect } = chai;
const sinonChai = require("sinon-chai");
chai.use(sinonChai)

const productsModel = require('../../../src/models/productsModels');
const productService = require('../../../src/services/productService');

const { products, productsDB , newProducts} = require('../models/mocks/productsAllMock');


describe('Testes na unidade de productsServices', () => {

  it('Realizando um GET em todos os produtos', async () => {
    sinon.stub(productsModel, 'getAllProductsModels').resolves(productsDB)
    const result = await productService.getAllProductsServices();
    expect(result).to.be.deep.equal(products);
  })
  
  it('Realizando um GET pelo ID de um produto EXISTENTE', async () => {

      sinon.stub(productsModel, 'getIdProductsModels').resolves([productsDB[0]]);
      const result = await productService.getIdProductsServices(1);
      expect(result).to.be.deep.equal(products[0]);
      sinon.restore()
    })
  
  it('Cadastra um novo produto no DB', async () => {
      const req = {body: {name: 'Mouse'}}

      sinon.stub(productsModel, 'postNewProductModels').resolves(5)
      sinon.stub(productsModel, 'getIdProductsModels').resolves([newProducts])
      const result = await productService.newProductsServices(req);

      expect(result).to.be.deep.equal(newProducts);
      sinon.restore()
  })
})