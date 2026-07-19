import { User } from "./user.model.js";
import { Company } from "./company.model.js";
import { Review } from "./review.model.js";
import { Category } from "./category.model.js";
import { Zip } from "./zip.model.js";
import { City } from "./city.model.js";
import { State } from "./state.model.js";
import { Company_Category } from "./company_category.model.js";
import { PhoneNumber } from "./phone-number.model.js";
import { PhoneType } from "./phone-type.model.js";
import { Email } from "./email.model.js";
import { Website } from "./website.model.js";
import { Aglomeration } from "./aglomeration.model.js";
import { Address } from "./address.model.js";
import { Location } from "./location.model.js";
import { sequelize } from "../sequelize.js";

const options = {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
};

Company.hasMany(Review, { foreignKey: "companyId", ...options });
Review.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(PhoneNumber, { foreignKey: "companyId", ...options });
PhoneNumber.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(Email, { foreignKey: "companyId", ...options });
Email.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(Website, { foreignKey: "companyId", ...options });
Website.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(Email, { foreignKey: "companyId", ...options });
Email.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(PhoneNumber, { foreignKey: "companyId", ...options });
PhoneNumber.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(Address, { foreignKey: "companyId", ...options });
Address.belongsTo(Company, { foreignKey: "companyId" });

PhoneType.hasMany(PhoneNumber, { foreignKey: "typeId", ...options });
PhoneNumber.belongsTo(PhoneType, { foreignKey: "typeId" });

Aglomeration.hasMany(Location, { foreignKey: "aglomerationId", ...options });
Location.belongsTo(Aglomeration, { foreignKey: "aglomerationId" });

Zip.hasMany(Location, { foreignKey: "zipId", ...options });
Location.belongsTo(Zip, { foreignKey: "zipId" });

City.hasMany(Location, { foreignKey: "cityId", ...options });
Location.belongsTo(City, { foreignKey: "cityId" });

State.hasMany(Location, { foreignKey: "stateId", ...options });
Location.belongsTo(State, { foreignKey: "stateId" });

Location.hasMany(Address, { foreignKey: "locationId", ...options });
Address.belongsTo(Location, { foreignKey: "locationId" });

Company.belongsToMany(Category, {
  through: Company_Category,
  foreignKey: "companyId",
  otherKey: "categoryId",
  ...options,
});

Category.belongsToMany(Company, {
  through: Company_Category,
  foreignKey: "categoryId",
  otherKey: "companyId",
  ...options,
});

export {
  User,
  Company,
  Review,
  Category,
  Zip,
  City,
  State,
  Company_Category,
  PhoneNumber,
  PhoneType,
  Email,
  Website,
  Aglomeration,
  Address,
  Location,
  sequelize,
};
