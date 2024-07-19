const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async readAll() {
    const [result] = await this.database.query(
      `SELECT id, name from ${this.table}`
    );

    return result;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT c.name, a.id, a.reference, a.description, a.image, a.date 
         FROM ${this.table} AS c LEFT JOIN article AS a ON c.id = a.category_id  WHERE c.name = ?`,
      [id]
    );

    return rows;
  }

  async create(category) {
    const {name} = category
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (name) VALUE (?)`,
      [name]
    );

    return rows.insertId;
  }

  async update(category) {
    const {name, id} = category;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE id = ? `,
      [name, id]
    );

    return result
  }

  async delete(id) {
    const [row] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return row.affectedRows;
  }
}

module.exports = CategoryRepository;
