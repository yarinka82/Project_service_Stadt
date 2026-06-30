import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Company extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
    },
    localAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    globalAddressId: {
      type: DataTypes.INTEGER,
    },
    locationLatitude: {
      type: DataTypes.FLOAT,
    },
    locationLongitude: {
      type: DataTypes.FLOAT,
    },
  },
  {
    sequelize,
    modelName: "Company",
    tableName: "companies",
  }
);

export { Company };
