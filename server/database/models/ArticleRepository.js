/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class ArticleRepository extends AbstractRepository {
  constructor() {
    super({ table: "article" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT id, reference, description, image, date, category_id FROM ${this.table}`
    );

    return rows;
  }

  async read(id) {
    const [row] = await this.database.query(
      `SELECT a.id, a.reference, a.description, a.image, a.date, c.name as category FROM ${this.table} AS a JOIN category AS c ON a.category_id=c.id where a.id = ?`,
      [id]
    );

    return row[0];
  }
  
 async create(article) {
    const {
      reference,
      description,
      image, 
      date,
      category_id,
    } = article;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (reference, description, image, date, category_id) VALUES(?, ?, ?, ?, ?)`,
      [reference, description, image, date, category_id]
    );

    return result.insertId;
  }

  async update(article) {
    const { reference, category_id } = article;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET category_id=? WHERE id=?`,
      [reference, category_id]
    );

    return result;
  }

 

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = ArticleRepository;
