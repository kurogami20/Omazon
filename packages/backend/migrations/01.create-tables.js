import { logger } from "../lib/logger.js";
import { sequelize } from "../models/index.model.js";

await sequelize.dropAllSchemas({ force: true });
await sequelize.sync({ force: true });

logger.info("✅ Database tables created successfully!");

await sequelize.close();