import { Router } from "express";
import { router as authRouter } from "./auth.router.js";
import { router as categoriesRouter } from "./categories.router.js";
import { router as productsRouter } from "./products.router.js";

export const router = Router();

router.use(authRouter);
router.use(categoriesRouter);
router.use(productsRouter);

