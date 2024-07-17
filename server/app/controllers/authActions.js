const argon2 = require("argon2");
const tables = require("../../database/tables");

const { encodeJWT, decodeJWT } = require("../helpers/jwtHelper");

const login = async (req, res) => {
  const { email, password } = req.boby;
  const [user] = await tables.user.findByEmail(email);

  if (!user) {
    return res.status(404).json({
      message: "Le couple email/mot de passe est incorrect",
    });
  }
  const verifiedPassword = await argon2.verify(user.password, password);

  if (!verifiedPassword) {
    return res.status(404).json({
      message: "Le couple email/mot de passe est incorrect",
    });
  }

  delete user.password;

  const token = await encodeJWT(user);
  return res
    .status(200)
    .cookie("auth_token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    })
    .json({ user, token });
};

const logout = (req, res) => {
  res.clearCookie("auth_token").sendStatus(200);
};

const checkAuth = async (req, res) => {
  const token = req.cookies?.auth_token;

  if (!token) {
    return res.status(403).json(null);
  }

  try {
    const validToken = await decodeJWT(token);

    return res
      .status(200)
      .cookie("auth_token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600000,
      })
      .json({
        user: validToken,
      });
  } catch (err) {
    return console.error(err);
  }
};
module.exports = { login, logout, checkAuth };
