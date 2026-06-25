import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Company_Category extends Model {}

Company_Category.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    companyId: { type: DataTypes.BIGINT },
    categoryId: { type: DataTypes.BIGINT },
    assignedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Company_Category",
    tableName: "companies_categories",
  }
);

export { Company_Category };
