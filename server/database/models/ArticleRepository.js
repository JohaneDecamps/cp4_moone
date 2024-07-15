/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class VideoRepository extends AbstractRepository {
  constructor() {
    super({ table: "article" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT a.id, a.reference, a.description, a.image, a.date, c.name as category_name FROM ${this.table} AS a JOIN category AS c ON a.category_id=c.id`
    );

    return rows;
  }

  async read(id) {
    const [row] = await this.database.query(
      `SELECT id, reference, description, image, date FROM ${this.table} where id = ?`,
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
      `INSERT INTO ${this.table} (reference, description, image, date, category_id) values(?, ?, ?, ?, ?)`,
      [reference, description, image, date, category_id]
    );

    return result.insertId;
  }

  async update(article) {
    const { category_id } = article;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET category_id=? WHERE id=?`,
      [category_id]
    );

    return result.affectedRows;
  }

 

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = VideoRepository;
