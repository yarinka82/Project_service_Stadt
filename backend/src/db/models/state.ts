import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class State extends Model {}

State.init(
  {
    stId: {
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
    modelName: "State",
  }
);

export { State };
