import { Category, Product, sequelize, Tag, User } from "../models/index.model.js";
import db from "../database-sample.js";
import { logger } from "../lib/logger.js";
import { hash } from "../lib/crypto.js";

for (const user of db.users) {
  await User.create({
    ...user,
    password: await hash(user.password)
  });
}

for (const category of db.categories) {
  await Category.create(category);
}

for (const tag of db.tags) {
  await Tag.create(tag);
}

for (const product of db.products) {
  await Product.create(product);
}

logger.info("✅ Database tables populated successfully!");

await sequelize.close();
