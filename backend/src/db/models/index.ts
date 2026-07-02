import { User } from "./user.model.js";
import { Company } from "./company.model.js";
import { Review } from "./review.model.js";
import { Category } from "./category.model.js";
import { Zip } from "./zip.model.js";
import { City } from "./city.model.js";
import { State } from "./state.model.js";
import { Company_Category } from "./company_category.model.js";
import { Phone } from "./phone.model.js";
import { Email } from "./email.model.js";
import { Website } from "./website.model.js";
import { Aglomeration } from "./aglomeration.model.js";
import { Address } from "./address.model.js";
import { sequelize } from "../sequelize.js";

const options = {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
};

Company.hasMany(Review, { foreignKey: "companyId", ...options });
Review.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(Phone, { foreignKey: "companyId", ...options });
Phone.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(Email, { foreignKey: "companyId", ...options });
Email.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(Website, { foreignKey: "companyId", ...options });
Website.belongsTo(Company, { foreignKey: "companyId" });

City.hasMany(Aglomeration, { foreignKey: "cityId", ...options });
Aglomeration.belongsTo(City, { foreignKey: "cityId" });

State.hasMany(Aglomeration, { foreignKey: "stateId", ...options });
Aglomeration.belongsTo(State, { foreignKey: "stateId" });

Company.hasMany(Email, { foreignKey: "companyId", ...options });
Email.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(Phone, { foreignKey: "companyId", ...options });
Phone.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(Website, { foreignKey: "companyId", ...options });
Website.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(Address, { foreignKey: "companyId", ...options });
Address.belongsTo(Company, { foreignKey: "companyId" });

Zip.hasMany(Address, { foreignKey: "zipId", ...options });
Address.belongsTo(Zip, { foreignKey: "zipId" });

City.hasMany(Address, { foreignKey: "cityId", ...options });
Address.belongsTo(City, { foreignKey: "cityId" });

State.hasMany(Address, { foreignKey: "stateId", ...options });
Address.belongsTo(State, { foreignKey: "stateId" });

Aglomeration.hasMany(Address, { foreignKey: "aglomerationId", ...options });
Address.belongsTo(Aglomeration, { foreignKey: "aglomerationId" });

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
  Phone,
  Email,
  Website,
  Aglomeration,
  Address,
  sequelize,
};
