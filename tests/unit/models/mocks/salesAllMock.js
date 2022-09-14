const getAllSales = [
  {
    saleId: 1,
    date: "2022-09-14T21:58:23.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2022-09-14T21:58:23.000Z",
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: "2022-09-14T21:58:23.000Z",
    productId: 3,
    quantity: 15,
  },
];

const getIDSales = [
  {
    date: "2022-09-14T21:58:23.000Z",
    productId: 3,
    quantity: 15,
  },
];

const newSalesMock = {
  id: 4,
  itemsSold: [
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

const updateChangeSalesMock = {
  saleId: 1,
  itemsUpdated: [
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
module.exports = {
  getAllSales,
  getIDSales,
  newSalesMock,
  updateChangeSalesMock,
};