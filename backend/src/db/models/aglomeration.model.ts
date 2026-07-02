import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Aglomeration extends Model {}

Aglomeration.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    cityId: {
      type: DataTypes.INTEGER,
    },
    stateId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Aglomeration",
    tableName: "aglomerations",
  }
);

export { Aglomeration };
