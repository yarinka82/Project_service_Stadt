import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { Phone } from "../models/index.js";

export async function seedPhonesFromCsv() {
  return seedFromCsv(Phone, "phones.csv");
}
