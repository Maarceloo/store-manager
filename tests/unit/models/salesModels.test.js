const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const salesModels = require("../../../src/models/salesModels");

const { getAllSales, getIDSales } = require("../models/mocks//salesAllMock");
const connection = require("../../../src/models/db/connection");

describe("Testes na unidade de ProductsModels", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("testando funcao 'newSalesDateModels'", async () => {
    sinon.stub(connection, "execute").resolves([{ insertId: 1 }]);
    const result = await salesModels.newSalesDateModels();

    expect(result).to.be.deep.equal(1);
  });

  it("testando a function 'addSalesDBModels'", async () => {
    const id = 1;
    const productId = 2;
    const quantity = 5;

    sinon.stub(connection, "execute").resolves();
    const result = await salesModels.addSalesDBModels(id, productId, quantity);

    expect(result).to.be.deep.equal(undefined);
  });

  it("testando a function 'getAllSalesModels'", async () => {
    sinon.stub(connection, "execute").resolves([getAllSales]);
    const result = await salesModels.getAllSalesModels();
    expect(result).to.be.deep.equal(getAllSales);
  });

  it("testando a function 'getIdSalesModels'", async () => {
    const id = 2;

    sinon.stub(connection, "execute").resolves([getIDSales]);
    const result = await salesModels.getIdSalesModels(id);
    expect(result).to.be.deep.equal(getIDSales);
  });

  it("testando a function 'deleteSalesModels'", async () => {
    const id = 1;

    sinon.stub(connection, "execute").resolves([id]);
    const result = await salesModels.deleteSalesModels(id);
    expect(result).to.be.deep.equal(id);
  });

  it("testando a function 'changeSalesModels'", async () => {
    const productId = 1
    const quantity = 2

    sinon.stub(connection, "execute").resolves(getAllSales[0]);
    await salesModels.changeSalesModels(productId, quantity);
  });
});
