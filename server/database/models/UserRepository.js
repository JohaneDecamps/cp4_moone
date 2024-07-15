/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT u.firstname, u.lastname, u.email, u.password, u.date, r.name AS role FROM ${this.table} AS u JOIN role AS r ON u.role_id=r.id`
    );

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT u.firstname, u.lastname, u.email, u.password, u.date, r.name AS role FROM ${this.table} AS u JOIN role AS r ON u.role_id=r.id WHERE u.id=?`,
      [id]
    );
    return rows[0];
  }

  async update(user) {
    const { firstname, lastname, email, password, role_id, date, id } = user;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET firstname=?, lastname=?, email=?, password=?, role_id=? WHERE id=?`,
      [firstname, lastname, email, password, role_id, date, id]
    );

    return result;
  }

  async create(firstname, lastname, email, password, role_id, date) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, password, role_id, date) VALUES (?, ?, ?, ?, ?, ?)`,
      [firstname, lastname, email, password, role_id, date]
    );

    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result;
  }
}

module.exports = UserRepository;
