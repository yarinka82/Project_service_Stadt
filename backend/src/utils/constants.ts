export const DEV_TYPES = {
  DEV: "development",
  PROD: "production",
};

export const LOG_TYPES = {
  DEV: "dev",
  SHORT: "short",
  COMMON: "common",
  TINY: "tiny",
};

export const ROUTES = {
  ICONS: "icons",
  CITIES: "cities",
  COMPANIES: "companies",
  CATEGORIES: "categories",
  API_DOCS: "api-docs",
  REVIEWS: "reviews",
  AGLOMERATIONS: "aglomerations",
  UNIQUE_CITY_NAMES: "unique-city-names",
};

export const MESSAGES = {
  SERVER_CONNECTION_SUCCESS: "Server started successfull",
  DB_CONNECTION_SUCCESS: "Database connection established successfully.",
  SERVER_START: "Server is running on port",
  SERVER_CONNECTION_ERROR: "Server connection error",
  SERVER_ERROR: "Internal server error",
  DB_CONNECTION_ERROR: "Unable to connect to the database:",
  NOT_FOUND: "Not Found",
  BAD_REQUEST: "Bad Request",
  MISSING_FIELDS: "Missing fields",
  SEEDER_START: "[Seeder] Starting validation and population of reference data...",
  SEEDEE_SUCCESS: "[Seeder] All reference data has been validated.",
  SEEDER_ERROR: "[Seeder] Critical error while populating the database:",
  SEEDER_ERROR_IN: "[Seeder] Error during insertion into",
  SEEDER_SUCCESS_IN: "[Seeder] Successfully imported records into model",
  SEEDER_SKIPPING: "[Seeder] Table already contains data. Skipping for model:",
  SEEDER_FILE_NOTFOUNF: "[Seeder] File not found:",
  MODELS_SYN_SUCCESS: "Alle models were synchroniziert",
  FILTER_AGLOMERATIOM_ID_FAIL:
    "Filter by aglomerationId. Aglomeration ID must be a positive integer.",
  FILTER_CATEGORY_ID_FAIL: "Filter by categoryId. Category ID must be a positive integer.",
};
