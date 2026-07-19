import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class PhoneType extends Model {}

PhoneType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "PhoneType",
    tableName: "phone_types",
  }
);

export { PhoneType };
