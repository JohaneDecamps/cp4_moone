const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const categories = await tables.category.readAll();

    res.json(categories).status(200);
  } catch (error) {
    next(error);
  }
};
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await tables.category.read(id);

    if (category !== null) res.json(category).status(200);
    else res.status(404);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const category = req.body;

  try {
    const insertId = await tables.category.create(category);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await tables.category.update(id, name);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    await tables.category.delete(id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
