const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const productsModel = require("../../../src/models/productsModels");

const {
  products,
  productsDB,
  newProducts,
  newListProducts,
} = require("../models/mocks/productsAllMock");
const connection = require("../../../src/models/db/connection");

describe("Testes na unidade de ProductsModels", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("Realizando um GET em todos os produtos", async () => {
    sinon.stub(connection, "execute").resolves([productsDB]);
    const result = await productsModel.getAllProductsModels();

    expect(result).to.be.deep.equal(products);
  });

  it("Retorna o produto pelo ID", async () => {
    sinon.stub(connection, "execute").resolves([productsDB[0]]);
    const result = await productsModel.getIdProductsModels(1);

    expect(result).to.be.deep.equal(products[0]);
  });

  it("Criando um novo produto no DB", async () => {
    sinon.stub(connection, "execute").resolves([{ insertId: 5 }]);
    const result = await productsModel.postNewProductModels("Mouse");
    expect(result).to.be.deep.equal(5);
  });

  it("testando a funcao 'changePostModels'", async () => {
    const id = 1;
    const name = "Kratos";

    sinon.stub(connection, "execute").resolves([true]);
    const result = await productsModel.changePostModels(id, name);
    expect(result).to.be.deep.equal(true);
  });

  it("testando a funcao 'deleteProductsModels'", async () => {
    const id = 1;

    sinon.stub(connection, "execute").resolves([true]);
    const result = await productsModel.deleteProductsModels(id);
    expect(result).to.be.deep.equal(true);
  });
});
