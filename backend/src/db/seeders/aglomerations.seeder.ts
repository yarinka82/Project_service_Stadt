import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { Aglomeration } from "../models/index.js";

export async function seedAglomerationsFromCsv() {
  return seedFromCsv(Aglomeration, "aglomerations.csv");
}
