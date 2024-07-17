const AbstractSeeder = require("./AbstractSeeder");

class ArticleSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "article", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeArticle = {
        reference: this.faker.lorem.word(),
        description: this.faker.lorem.paragraph(),
        image: this.faker.image.urlPicsumPhotos(),
        imagetwo : this.faker.image.urlPicsumPhotos(),
        date: this.faker.date.recent(),
        category_id: this.faker.number.int({ min: 1, max: 3 }),
        user_id: this.faker.number.int({ min: 1, max: 9 }),
      };

      this.insert(fakeArticle);
    }
  }
}

module.exports = ArticleSeeder;
