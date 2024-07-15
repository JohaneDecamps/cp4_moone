const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async readAll() {
    const [result] = await this.database.query(
      `select id, name from ${this.table}`
    );

    return result;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT c.name, a.id, a.reference, a.description, a.image, a.date 
         FROM ${this.table} AS c  
         LEFT JOIN article AS a ON c.id = a.category_id 
         WHERE c.name = ?`,
      [id]
    );

    return rows;
  }

  async create(name) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (name) value (?)`,
      [name]
    );

    return rows.insertId;
  }

  async update(name, id) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ? where id = ? `,
      [name, id]
    );

    return result.affectedRows;
  }

  async delete(id) {
    const [row] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return row.affectedRows;
  }
}

module.exports = CategoryRepository;
