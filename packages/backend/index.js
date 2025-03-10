import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "./config.js";
import { router as apiRouter } from "./routers/index.router.js";
import { notFoundMiddleware, errorHandler } from "./middlewares/index.middleware.js";
import { logger } from "./lib/logger.js";

// Express app
const app = express();

// Cross origin requests policy
app.use(cors({
  origin: config.server.cors.allowedDomains, // Allow cross-origin requests
  credentials: config.server.cors.credentials // Allow cross-origin cookies to be sent
}));

// Body parsers
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded
app.use(express.json()); // application/json

// Cookie parser
app.use(cookieParser());

// Static assets
app.use(express.static("public"));

// API routes
app.use("/api", apiRouter);

// Not found middleware
app.use(notFoundMiddleware);

// Error middleware
app.use(errorHandler);

// HTTP server
const { protocol, port, host } = config.server; 
app.listen(port, host, () => {
  logger.info(`🚀 Server listening on ${protocol}://${host}:${port}`);
});
