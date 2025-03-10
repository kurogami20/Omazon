import { Sequelize, DataTypes, Model } from "sequelize";
import config from "../config.js";
import { logger } from "../lib/logger.js";

const { dialect, storage, database, username, password } = config.database;
export const sequelize = new Sequelize({
  dialect,
  storage,
  database,
  username,
  password,
  logging: logger.debug.bind(logger)
});

export class User extends Model {}
export class RefreshToken extends Model {}

export class Product extends Model {}
export class Category extends Model {}
export class Tag extends Model {}


User.init({
  firstname: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING }
}, { sequelize });

RefreshToken.init({
  token: { type: DataTypes.STRING },
  expiresAt: { type: DataTypes.DATE },
  userId: { type: DataTypes.INTEGER }
}, { sequelize });

Product.init({
  title: { type: DataTypes.TEXT },
  slug: { type: DataTypes.TEXT, unique: true },
  price: { type: DataTypes.FLOAT },
  image: { type: DataTypes.TEXT },
  description: { type: DataTypes.TEXT },
}, { sequelize });

Category.init({
  title: { type: DataTypes.TEXT, unique: true },
  slug: { type: DataTypes.TEXT, unique: true },
  image: { type: DataTypes.TEXT },
}, { sequelize });

Tag.init({
  type: { type: DataTypes.STRING },
  text: { type: DataTypes.TEXT },
}, { sequelize });


// User <-> RefreshToken
User.hasMany(RefreshToken, { foreignKey: "userId", as: "refreshTokens" });
RefreshToken.belongsTo(User, { foreignKey: "userId", as: "user" });

// Product <-> Category
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });
Category.hasMany(Product, { foreignKey: "categoryId", as: "products" });

// Product <-> Tag
Product.belongsTo(Tag, { foreignKey: "tagId", as: "tag" });
Tag.hasMany(Product, { foreignKey: "tagId", as: "products" });
