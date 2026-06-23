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
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    houseNumer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    officeNumber: {
      type: DataTypes.STRING,
    },
    addressId: {
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
