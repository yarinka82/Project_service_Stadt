import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { Zip } from "../models/index.js";

export async function seedZipsFromCsv() {
  return seedFromCsv(Zip, "zips.csv");
}
