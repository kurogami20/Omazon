import { Router } from "express";
import * as productsController from "../controllers/products.controller.js";
import { controllerWrapper as cw } from "./utils.js";

export const router = Router();

router.get("/products", cw(productsController.getProducts));

router.get("/products/:slugOrId", cw(productsController.getProduct));
