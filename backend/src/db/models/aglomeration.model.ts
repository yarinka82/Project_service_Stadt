import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Aglomeration extends Model {}

Aglomeration.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Aglomeration",
    tableName: "aglomerations",
  }
);

export { Aglomeration };
