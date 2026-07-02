import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Address extends Model {}

Address.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    houseNr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    additionalAdrsInfo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zipId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    aglomerationId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    assignedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Address",
    tableName: "addresses",
  }
);

export { Address };
