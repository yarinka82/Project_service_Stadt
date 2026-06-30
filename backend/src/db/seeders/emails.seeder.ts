import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { Email } from "../models/index.js";

export async function seedEmailsFromCsv() {
  return seedFromCsv(Email, "emails.csv");
}
