const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  try {
    const hashedPassword = await argon2.hash(password);

    req.body.password = hashedPassword;

    next();
  } catch (err) {
    res
      .sendStatus()
      .json({ Error: "An error occured while saving your informations" });
  }
};

module.exports = hashPassword;
