import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { City } from "../models/index.js";

export async function seedCitiesFromCsv() {
  return seedFromCsv(City, "cities.csv");
}
