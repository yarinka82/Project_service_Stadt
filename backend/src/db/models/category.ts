import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

class Category extends Model {}

Category.init(
  {
    catId: {
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
    modelName: "Category",
    tableName: "categories",
  }
);

export { Category };
