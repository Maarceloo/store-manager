const newProductValidation = (req, res, next) => {
  const { name } = req.body;
  if (name) {
    return next();
  }
  return res.status(400).json({ message: 'O "nome" deve ser valido ' });
};

module.exports = newProductValidation;