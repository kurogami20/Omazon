import { Router } from "express";
import * as categoriesController from "../controllers/categories.controller.js";
import { controllerWrapper as cw } from "./utils.js";

export const router = Router();

router.get("/categories", cw(categoriesController.getCategories));

router.get("/category", cw(categoriesController.getCategory));
