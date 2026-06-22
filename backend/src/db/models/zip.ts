import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Zip extends Model {}

Zip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Zip",
    tableName: "zips",
  }
);

export { Zip };
