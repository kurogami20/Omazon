import { Category } from "../models/index.model.js";
import { NotFoundError } from "../lib/errors.js";

export async function getCategories(_, res) {
  const categories = await Category.findAll();
  res.json(categories);
}

export async function getCategory(req, res) {
  const slug = req.query.slug || null;
  const category = await Category.findOne({
    where: { slug },
    include: ["products"]
  });

  if (! category) { throw new NotFoundError("Category not found"); }

  res.json(category);
}

