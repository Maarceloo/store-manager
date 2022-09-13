const productIdValidation = async (req, res, next) => {
  const sales = req.body;
  const products = sales.every((iten) => iten.productId);
  if (!products) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  return next();
};

module.exports = productIdValidation;