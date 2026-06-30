import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class City extends Model {}

City.init(
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
    modelName: "City",
    tableName: "city_unique_names",
  }
);

export { City };
