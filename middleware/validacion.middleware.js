const { validationResult } = require("express-validator")

const validacion = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.json({ errors: errors.array() });
  };
};


module.exports = validacion