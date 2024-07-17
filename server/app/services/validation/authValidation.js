const Joi = require("joi");

const authValidationSchema = Joi.object({
  email: Joi.string().regex(
    /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  ),
  password: Joi.string().regex(
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/
  ),
});

const validateAuth = (req, res, next) => {
  const { email, password } = req.body;

  try {
    authValidationSchema.validate({ email, password });
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateAuth;
