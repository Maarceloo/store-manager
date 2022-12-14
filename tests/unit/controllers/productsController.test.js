const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const productControllers = require("../../../src/controllers/productsController");
const productService = require("../../../src/services/productService");

const {
  products,
  productsDB,
  newProducts,
  changeProduct,
} = require("../models/mocks/productsAllMock");

describe("Testes na unidade de productsControllers", () => {

  afterEach(() => {
    sinon.restore();
  });

  it("Realizando um GET em todos os produtos", async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "getAllProductsServices").resolves(productsDB);
    await productControllers.getAllControllers(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it("Realizando um GET pelo ID de um produto EXISTENTE", async () => {
    const req = { params: { id: 1 }, body: {} };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "getIdProductsServices").resolves(productsDB[0]);
    await productControllers.getIdControllers(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });

  it("Realizando um GET pelo ID de um produto INEXISTENTE", async () => {
    const req = { params: { id: 8 }, body: {} };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "getIdProductsServices").resolves();
    await productControllers.getIdControllers(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: "Product not found" });
  });
  it("Criando um novo produto no DB", async () => {
    const req = { body: { name: "Mouse" } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "newProductsServices").resolves(newProducts);
    await productControllers.newPostControllers(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProducts);
  });
  it("Alterando um produto no DB PUT /:id", async () => {
    const req = {
      body: { name: "Machado do Kratos" },
      params: { id: "1" },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "changePostServices").resolves(changeProduct);
    await productControllers.changePostControllers(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(changeProduct);
  });
  it("deletando um produto no DB DELETE /:id", async () => {
    const req = { params: { id: "1" } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "deleteProductsServices").resolves();

    await productControllers.deleteProductsControllers(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith();
  });
  it("Buscando produtos por search?q= DB GET /", async () => {
    const req = { query: { q: "Martelo" } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "seachGetServices").resolves(products[0]);
    await productControllers.seachGetControllers(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });
});
