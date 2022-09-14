const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const productsModel = require("../../../src/models/productsModels");
const productService = require("../../../src/services/productService");

const {
  products,
  productsDB,
  newProducts,
  newListProducts,
} = require("../models/mocks/productsAllMock");

describe("Testes na unidade de productsServices", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("Realizando um GET em todos os produtos", async () => {
    sinon.stub(productsModel, "getAllProductsModels").resolves(productsDB);
    const result = await productService.getAllProductsServices();
    expect(result).to.be.deep.equal(products);
  });

  it("Realizando um GET pelo ID de um produto EXISTENTE", async () => {
    sinon.stub(productsModel, "getIdProductsModels").resolves([productsDB[0]]);
    const result = await productService.getIdProductsServices(1);
    expect(result).to.be.deep.equal(products[0]);
  });

  it("Cadastra um novo produto no DB", async () => {
    const req = { body: { name: "Mouse" } };

    sinon.stub(productsModel, "postNewProductModels").resolves(5);
    sinon.stub(productsModel, "getIdProductsModels").resolves([newProducts]);
    const result = await productService.newProductsServices(req);

    expect(result).to.be.deep.equal(newProducts);
  });
  it("Altera um produto no DB", async () => {
    const req = {
      params: { id: 5 },
      body: { name: "Mouse" },
    };

    sinon.stub(productsModel, "changePostModels").resolves(newListProducts[3]);
    const result = await productService.changePostServices(req);

    expect(result).to.be.deep.equal(newListProducts[3]);
  });
  it("deleta um produto no DB", async () => {
    const req = {
      params: { id: 1 },
    };

    sinon.stub(productsModel, "deleteProductsModels").resolves(req.params.id);

    await productService.deleteProductsServices(req);

    expect(productsModel.deleteProductsModels).calledWith(1);
  });
  it("testa a funcao 'seachGetServices'", async () => {
    const req = {
      query: { q: undefined },
    };

    sinon.stub(productsModel, "getAllProductsModels").resolves(productsDB);
    const allProducts = await productsModel.getAllProductsModels();

    const result = await productService.seachGetServices(req);
    expect(result).to.be.deep.equal(allProducts);


    req.query.q = "Martelo"
    const result2 = await productService.seachGetServices(req);
    const res = allProducts.filter((iten) => iten.name.includes(req.query.q));
    expect(result2).to.be.deep.equal(res);
  });
});
