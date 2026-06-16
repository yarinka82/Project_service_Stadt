import { env } from "./config/env.js";
import app from "./app.js";
import { MESSAGES } from "./utils/constants.js";
import { sequelize } from "./db/models/index.js";

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
