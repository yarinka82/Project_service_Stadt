import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Email extends Model {}

Email.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    companyId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Email",
    tableName: "emails",
  }
);

export { Email };
