import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Phone extends Model {}

Phone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Phone",
    tableName: "phones",
  }
);

export { Phone };
