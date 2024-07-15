/* eslint-disable camelcase */
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const user = await tables.user.readAll();

    res.json(user).sendStatus(200);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await tables.user.read(id);

    if (user != null) res.json(user).sendStatus(200);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, email, password, role_id, date } = req.body;
    await tables.user.update(
      firstname,
      lastname,
      email,
      password,
      role_id,
      date,
      id
    );

    res.sendStatus(204)
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password, date } = req.body;
    const role_id = req.body.role_id || 1;

   await tables.user.create(
      firstname,
      lastname,
      email,
      password,
      role_id,
      date
    );

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    await tables.user.delete(id);

    res.sendStatus(204)
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, edit, add, destroy };
