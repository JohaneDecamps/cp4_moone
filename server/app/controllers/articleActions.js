/* eslint-disable camelcase */

const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const articles = await tables.article.readAll();

    res.json(articles).status(200);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;

    const article = await tables.article.read(id);

    if (article !== null) res.json(article).status(200);
    else res.status(404);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const article = req.body;

  try {
    const insertId = await tables.article.create(article);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const { reference, description, image, date, category_id } = req.body;

    await tables.article.update(
      reference,
      description,
      image,
      date,
      category_id
    );
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    await tables.article.destroy(id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, edit, add, destroy };
