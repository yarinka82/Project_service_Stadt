import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Website extends Model {}

Website.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    companyId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Website",
    tableName: "websites",
  }
);

export { Website };
