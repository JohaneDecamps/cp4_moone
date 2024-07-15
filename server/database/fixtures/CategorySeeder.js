const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "category", truncate: true });
  }

  run() {
    const categories = [
      { name: "Pots" },
      { name: "Vases" },
      { name: "Vaisselle" },
    ];

    categories.forEach((category) => this.insert(category));
  }
}

module.exports = CategorySeeder;
