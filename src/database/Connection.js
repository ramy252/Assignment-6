import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("assignment6", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const databaseConnection = async () => {
  try {
    const { productModel } = await import("../model/productModel.js");
    const { supplierModel } = await import("../model/supplierModel.js");
    const { salesModel } = await import("../model/salesModel.js");

    
    supplierModel.hasMany(productModel, {
      foreignKey: "SupplierID",
    });

    productModel.belongsTo(supplierModel, {
      foreignKey: "SupplierID",
    });

    productModel.hasMany(salesModel, {
      foreignKey: "ProductID",
    });

    salesModel.belongsTo(productModel, {
      foreignKey: "ProductID",
    });

    await sequelize.sync();
  } catch (error) {
    console.log(error);
  }
};
