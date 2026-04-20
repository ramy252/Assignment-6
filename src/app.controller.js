import express from "express";
import { databaseConnection } from "./database/Connection.js";

export const bootStrap = () => {
  const app = express();
  app.use(express.json());

  databaseConnection();

  app.listen(3000, () => {
    console.log("server open on port 3000");
  });
};
