import { env } from "./config/env.js";
import { sequelize } from "./db/sequelize.js";
import app from "./app.js";
import { MESSAGES } from "./utils/constants.js";

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log(MESSAGES.DB_CONNECTION_SUCCESS);
    await sequelize.sync({ alter: true });
    console.log("Alle models were synchroniziert");

    app.listen(env.port, () => {
      console.log(`${MESSAGES.SERVER_START} ${env.port}`);
    });
  } catch (error) {
    console.error(MESSAGES.DB_CONNECTION_ERROR, error);
    process.exit(1);
  }
};

startServer();
