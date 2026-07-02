import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { Company } from "../models/index.js";

export async function seedCompaniesFromCsv() {
  return seedFromCsv(Company, "companies.csv");
}
