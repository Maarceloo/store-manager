const productIdValidation = async (req, res, next) => {
  const sales = req.body;
  console.log(sales);
  const products = sales.every((iten) => iten.productId);
  if (products) {
    next();
  }
  res.status(400).json({ message: '"productId" is required' });
};

module.exports = productIdValidation;

  // verifica se o products id é um numero
  // const key = products.every((iten) => typeof iten.productId === 'number');