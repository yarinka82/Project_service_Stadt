import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { Company_Category } from "../models/index.js";

export async function seedCompanyCategoriesFromCsv() {
  return seedFromCsv(Company_Category, "companies-categories.csv");
}
