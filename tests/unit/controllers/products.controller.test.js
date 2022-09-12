const sinon = require("sinon")
const chai = require("chai")
const { expect } = chai;
const sinonChai = require("sinon-chai");
chai.use(sinonChai)

const productControllers = require('../../../src/controllers/productsController');
const productService = require('../../../src/services/productService');
const connection = require('../../../src/models/connection');


const { products, productsDB} = require('../models/mocks/productsAll.mock');


describe('teste de unidade productControllers', () => {

  it('Realizando um GET em todos os produtos', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getAllProducts').resolves(productsDB)
    await productControllers.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(products)
  })

    it('Realizando um GET pelo ID de um produto EXISTENTE', async () => {
      const req = {params: {id: 1}, body: {}}
      const res = {}

      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getIdProducts').resolves(productsDB[0])
      await productControllers.getId(req, res);
      sinon.restore()

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(products[0])
    })
  
  it('Realizando um GET pelo ID de um produto INEXISTENTE', async () => {
      const req = {params: {id: 8}, body: {}}
      const res = {}

      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getIdProducts').resolves()
      await productControllers.getId(req, res);

      expect(res.status).to.have.been.calledWith(404)
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' })
    })
})