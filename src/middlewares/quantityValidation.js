const quantityValidation = async (req, res, next) => {
  const products = req.body;

  const quantity = products.every((iten) => (iten.quantity === 0 ? true : iten.quantity));
  if (!quantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  const quantityNumber = products.every((iten) => iten.quantity > 0);
  if (!quantityNumber) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = quantityValidation;