import { MESSAGES } from "../utils/constants.js";
import type { SeedFunction } from "../utils/interfaces.js";

export async function runSeeders(seedFromCsv: SeedFunction): Promise<void> {
  console.log(MESSAGES.SEEDER_START);
  try {
    await seedFromCsv();
    console.log(MESSAGES.SEEDEE_SUCCESS);
  } catch (error) {
    console.error(MESSAGES.SEEDER_ERROR, error);
  }
}
