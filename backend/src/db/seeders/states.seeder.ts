import { seedFromCsv } from "../../helpers/seedFromCsv.js";
import { State } from "../models/index.js";

export async function seedStatesFromCsv() {
  return seedFromCsv(State, "states.csv");
}
