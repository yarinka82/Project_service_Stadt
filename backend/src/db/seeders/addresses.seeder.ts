import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { Address } from "../models/index.js";

export async function seedAddressesFromCsv() {
  return seedFromCsv(Address, "addresses.csv");
}
