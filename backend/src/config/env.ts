import dotenv from "dotenv";

dotenv.config();

export const env = {
  host: process.env.HOST || "localhost",
  port: Number(process.env.PORT) || 3000,
  db_host: process.env.PG_HOST || "db",
  db_port: Number(process.env.PG_PORT) || 5432,
  db_user: process.env.PG_USER || "postgres",
  db_password: process.env.PG_PASSWORD || "password",
  db_name: process.env.PG_DATABASE || "mydb",
  dev_type: process.env.NODE_ENV || "production",
};
