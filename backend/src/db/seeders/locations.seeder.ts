import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { Location } from "../models/index.js";

export async function seedLocationsFromCsv() {
  return seedFromCsv(Location, "locations.csv");
}
