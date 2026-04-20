import { DataTypes } from "sequelize";
import { sequelize } from "../database/Connection.js";

export const supplierModel = sequelize.define("Supplier", {
  SupplierId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  SupplierName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ContactNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
