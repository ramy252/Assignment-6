import { DataTypes } from "sequelize";
import { sequelize } from "../database/Connection.js";

export const productModel = sequelize.define("Product", {
  ProductId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ProductName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  StockQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  CategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
