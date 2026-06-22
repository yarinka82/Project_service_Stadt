import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Email extends Model {}

Email.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Email",
    tableName: "emails",
  }
);

export { Email };
