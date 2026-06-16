import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Company extends Model {}

Company.init(
  {
    cmpId: {
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    houseNumer: {
      type: DataTypes.STRING,
      allowNull: false,
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
