import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { Category } from "../models/index.js";

export async function seedCategoriesFromCsv() {
  return seedFromCsv(Category, "categories.csv");
}
