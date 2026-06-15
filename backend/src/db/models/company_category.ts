import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Company_Category extends Model {}

Company_Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    assignedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Company_Category",
  }
);

export { Company_Category };
