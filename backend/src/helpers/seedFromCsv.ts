import * as fastcsv from "fast-csv";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Универсальная функция для чтения CSV и импорта в модель
export async function seedFromCsv(model: any, fileName: string): Promise<void> {
  // 1. Проверяем, есть ли уже данные в таблице
  const count = await model.count();
  if (count > 0) {
    console.log(`[Seeder] Таблица для модели ${model.name} уже содержит данные. Пропуск.`);
    return;
  }

  const filePath = path.resolve(__dirname, `../db/seeders/data/${fileName}`); // Путь к вашим CSV

  if (!fs.existsSync(filePath)) {
    console.error(`[Seeder] Файл не найден: ${filePath}`);
    return;
  }

  const rows: any[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(fastcsv.parse({ headers: true }))
      .on("data", (row) => {
        rows.push(row);
      })
      .on("end", async () => {
        try {
          // Используем bulkCreate для быстрой массовой вставки
          await model.bulkCreate(rows);
          console.log(
            `[Seeder] Успешно импортировано ${rows.length} записей в модель ${model.name}`
          );
          resolve();
        } catch (error) {
          console.error(`[Seeder] Ошибка при вставке в ${model.name}:`, error);
          reject(error);
        }
      })
      .on("error", (err) => reject(err));
  });
}
