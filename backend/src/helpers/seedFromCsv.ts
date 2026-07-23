import * as fastcsv from "fast-csv";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { MESSAGES } from "../utils/constants.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Функция, которая заменяет все пустые строки в объекте на null
const transformRow = (row: any) => {
  const cleanedRow: any = {};
  for (const key in row) {
    if (Object.prototype.hasOwnProperty.call(row, key)) {
      // Если значение — пустая строка, превращаем в null, иначе оставляем как есть
      cleanedRow[key] = row[key] === "" ? null : row[key];
    }
  }
  return cleanedRow;
};

// Универсальная функция для чтения CSV и импорта в модель
export async function seedFromCsv(model: any, fileName: string): Promise<void> {
  // 1. Проверяем, есть ли уже данные в таблице
  const count = await model.count();
  if (count > 0) {
    console.log(`${MESSAGES.SEEDER_SKIPPING} ${model.name}`);
    return;
  }

  const filePath = path.resolve(__dirname, `../db/seeders/data/${fileName}`); // Путь к CSV

  if (!fs.existsSync(filePath)) {
    console.error(`${MESSAGES.SEEDER_FILE_NOTFOUNF} ${filePath}`);
    return;
  }

  const rows: any[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(fastcsv.parse({ headers: true, delimiter: ";" }))
      .transform(transformRow)
      .on("data", (row) => {
        rows.push(row);
      })
      .on("end", async () => {
        try {
          await model.bulkCreate(rows);
          console.log(`${MESSAGES.SEEDER_SUCCESS_IN} ${model.name}: ${rows.length}`);
          resolve();
        } catch (error) {
          console.error(`${MESSAGES.SEEDER_ERROR_IN} ${model.name}:`, error);
          reject(error);
        }
      })
      .on("error", (err) => reject(err));
  });
}
