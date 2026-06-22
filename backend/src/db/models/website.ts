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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Website",
    tableName: "websites",
  }
);

export { Website };
