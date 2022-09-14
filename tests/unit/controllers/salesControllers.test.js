const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const salesControllers = require("../../../src/controllers/salesController");
const salesServices = require("../../../src/services/salesServices");

const {
  getAllSales,
  getIDSales,
  newSalesMock,
} = require("../models/mocks/salesAllMock");

describe("Testes na unidade de salesControllers", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Testando a function 'newSalesController'", async () => {
    const res = {};
    const req = {
      body: [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesServices, "newSalesServices").resolves(newSalesMock);
    await salesControllers.newSalesController(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newSalesMock);
  });

  it("Testando a function 'getAllSalesController'", async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesServices, "getAllSalesService").resolves(getAllSales);
    await salesControllers.getAllSalesController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getAllSales);
  });

  it("Testando a function 'getIdSalesController'", async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesServices, "getIdSalesServices").resolves(getIDSales);
    await salesControllers.getIdSalesController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getIDSales);
  });

  it("Testando a function 'deleteSalesControllers'", async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesServices, "deleteSalesServices").resolves();
    await salesControllers.deleteSalesControllers(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith();
  });

  it("Testando a function 'changeSalesControllers'", async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesServices, "changeSalesServices").resolves(newSalesMock);
    await salesControllers.changeSalesControllers(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(newSalesMock);
  });
});
