import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class GlobalAddress extends Model {}

GlobalAddress.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    zipId: {
      type: DataTypes.INTEGER,
    },
    cityId: {
      type: DataTypes.INTEGER,
    },
    stateId: {
      type: DataTypes.INTEGER,
    },
    assignedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "GlobalAddress",
    tableName: "global_address",
  }
);

export { GlobalAddress };
