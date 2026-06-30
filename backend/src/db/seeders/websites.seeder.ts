import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { Website } from "../models/index.js";

export async function seedWebsitesFromCsv() {
  return seedFromCsv(Website, "websites.csv");
}
