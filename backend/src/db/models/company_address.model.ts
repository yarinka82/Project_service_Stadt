import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Company_GlobalAddress extends Model {}

Company_GlobalAddress.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    companyId: { type: DataTypes.BIGINT },
    addressId: { type: DataTypes.BIGINT },
    assignedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Company_GlobalAddress",
    tableName: "companies_addresses",
  }
);

export { Company_GlobalAddress };
