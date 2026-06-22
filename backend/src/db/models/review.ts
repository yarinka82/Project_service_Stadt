import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Review",
    tableName: "reviews",
  }
);

export { Review };
