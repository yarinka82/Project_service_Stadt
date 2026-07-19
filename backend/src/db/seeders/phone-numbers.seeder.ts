import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { PhoneNumber } from "../models/index.js";

export async function seedPhoneNumbersFromCsv() {
  return seedFromCsv(PhoneNumber, "phone-numbers.csv");
}
