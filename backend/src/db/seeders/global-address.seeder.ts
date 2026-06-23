import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { GlobalAddress } from "../models/index.js";

export async function seedGlobalAddressFromCsv() {
  return seedFromCsv(GlobalAddress, "global-address.csv");
}
