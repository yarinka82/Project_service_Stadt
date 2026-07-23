import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { PhoneType } from "../models/index.js";

export async function seedPhoneTypesFromCsv() {
  return seedFromCsv(PhoneType, "phone-types.csv");
}
