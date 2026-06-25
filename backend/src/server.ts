import { env } from "./config/env.js";
import app from "./app.js";
import { MESSAGES } from "./utils/constants.js";
import { sequelize } from "./db/models/index.js";
import { runSeeders } from "./helpers/runSeeders.js";
import {
  seedCitiesFromCsv,
  seedStatesFromCsv,
  seedZipsFromCsv,
  seedCategoriesFromCsv,
  seedGlobalAddressFromCsv,
} from "./db/seeders/index.js";

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log(MESSAGES.DB_CONNECTION_SUCCESS);

    await sequelize.sync({ force: true });
    console.log(MESSAGES.MODELS_SYN_SUCCESS);

    await runSeeders(seedCitiesFromCsv);
    await runSeeders(seedStatesFromCsv);
    await runSeeders(seedZipsFromCsv);
    await runSeeders(seedCategoriesFromCsv);
    await runSeeders(seedGlobalAddressFromCsv);

    app.listen(env.port, () => {
      console.log(`${MESSAGES.SERVER_START} ${env.port}`);
    });
  } catch (error) {
    console.error(MESSAGES.DB_CONNECTION_ERROR, error);
    process.exit(1);
  }
};

startServer();
