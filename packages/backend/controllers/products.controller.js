import { Product } from "../models/index.model.js";
import { NotFoundError } from "../lib/errors.js";
import { Op } from "sequelize";

export async function getProducts(_, res) {
  const products = await Product.findAll({ include: ["category", "tag"] });
  res.json(products);
}

export async function getProduct(req, res) {
  const slugOrId = req.params.slugOrId;
  const product = await Product.findOne({
    where: {
      [Op.or]: [
        {
          id: slugOrId,
        },
        {
          slug: slugOrId,
        },
      ],
    },
  });

  if (!product) {
    throw new NotFoundError("Product not found");
  }

  res.json(product);
}
