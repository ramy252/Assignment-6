import { DataTypes } from "sequelize";
import { sequelize } from "../database/Connection.js";

export const salesModel = sequelize.define("Sales", {
  SaleID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  QuantitySold: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  SaleDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
