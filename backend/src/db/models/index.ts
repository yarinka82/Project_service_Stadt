import { User } from "./user.js";
import { Company } from "./company.js";
import { Review } from "./review.js";
import { Category } from "./category.js";
import { Zip } from "./zip.js";
import { City } from "./city.js";
import { State } from "./state.js";
import { Company_Category } from "./company_category.js";

const options = {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
};

City.hasMany(Company, { foreignKey: "cityId", ...options });
Company.belongsTo(City, { foreignKey: "cityId" });

Zip.hasMany(Company, { foreignKey: "zipId", ...options });
Company.belongsTo(Zip, { foreignKey: "zipId" });

State.hasMany(Company, { foreignKey: "stateId", ...options });
Company.belongsTo(State, { foreignKey: "stateId" });

Company.hasMany(Review, { foreignKey: "companyId", ...options });
Review.belongsTo(Company, { foreignKey: "company" });

Company.hasMany(Company_Category, { foreignKey: "companyId", ...options });
Company_Category.belongsTo(Company, { foreignKey: "companyId" });

Category.hasMany(Company_Category, { foreignKey: "categoryId", ...options });
Company_Category.belongsTo(Category, { foreignKey: "categoryId" });

export { User, Company, Review, Category, Zip, City, State, Company_Category };
