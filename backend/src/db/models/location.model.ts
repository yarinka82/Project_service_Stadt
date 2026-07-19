import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Location extends Model {}

Location.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    aglomerationId: {
      type: DataTypes.INTEGER,
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
  },
  {
    sequelize,
    modelName: "Location",
    tableName: "locations",
    indexes: [
      {
        name: "location_unique_index",
        unique: true,
        fields: ["zipId", "cityId", "stateId"],
      },
    ],
  }
);

export { Location };
