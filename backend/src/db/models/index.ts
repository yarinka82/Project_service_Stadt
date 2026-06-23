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
import { GlobalAddress } from "./global-address.model.js";
import { Company_GlobalAddress } from "./company_address.model.js";
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

Zip.hasMany(GlobalAddress, { foreignKey: "zipId", ...options });
GlobalAddress.belongsTo(Zip, { foreignKey: "zipId" });

City.hasMany(GlobalAddress, { foreignKey: "cityId", ...options });
GlobalAddress.belongsTo(City, { foreignKey: "cityId" });

State.hasMany(GlobalAddress, { foreignKey: "stateId", ...options });
GlobalAddress.belongsTo(State, { foreignKey: "stateId" });

Company.belongsToMany(GlobalAddress, {
  through: Company_GlobalAddress,
  foreignKey: "companyId",
  otherKey: "addressId",
  ...options,
});

GlobalAddress.belongsToMany(Company, {
  through: Company_GlobalAddress,
  foreignKey: "addressId",
  otherKey: "companyId",
  ...options,
});

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
  GlobalAddress,
  Company_GlobalAddress,
  sequelize,
};
