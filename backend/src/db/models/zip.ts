import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Zip extends Model {}

Zip.init(
  {
    zipId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Zip",
  }
);

export { Zip };