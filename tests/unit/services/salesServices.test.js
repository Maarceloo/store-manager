const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const salesControllers = require("../../../src/controllers/salesController");
const salesServices = require("../../../src/services/salesServices");
const salesModels = require("../../../src/models/salesModels");

const {
  getAllSales,
  getIDSales,
  newSalesMock,
  updateChangeSalesMock,
} = require("../models/mocks/salesAllMock");

describe("Testes na unidade de salesServices", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Testando a function 'newSalesServices'", async () => {
    const sales = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];

    sinon.stub(salesModels, "newSalesDateModels").resolves(4);
    sinon.stub(salesModels, "addSalesDBModels").resolves();
    
    const result = await salesServices.newSalesServices(sales);

    expect(result).to.have.deep.equal(newSalesMock);
  });

  it("Testando a function 'getAllSalesService'", async () => {
    sinon.stub(salesModels, "getAllSalesModels").resolves(getAllSales);
    const result = await salesServices.getAllSalesService();

    expect(result).to.have.been.equal(getAllSales);
  });

  it("Testando a function 'getIdSalesServices'", async () => {
    const req = { params: 1 };

    sinon.stub(salesModels, "getIdSalesModels").resolves(getIDSales);
    const result = await salesServices.getIdSalesServices(req);

    expect(result).to.have.been.equal(getIDSales);
  });

  it("Testando a function 'deleteSalesServices'", async () => {
    const req = { params: 1 };

    sinon.stub(salesModels, "deleteSalesModels").resolves(1);
    const result = await salesServices.deleteSalesServices(req);

    expect(result).to.have.been.equal(1);
  });

  it("Testando a function 'changeSalesServices'", async () => {
    const req = {
      params: { id: 1},
      body: [
          {
            productId: 1,
            quantity: 2
          },
          {
            productId: 2,
            quantity: 5
          },
        ],
    };

    sinon
      .stub(salesModels, "changeSalesModels")
      .resolves();

    const result = await salesServices.changeSalesServices(req);

    expect(result).to.have.deep.equal(updateChangeSalesMock);
  });
});
