import express from "express";
import {
  getAllSuppliers,
  createSupplier,
} from "../controllers/supplier.js";

const supplierRouter = express.Router();

supplierRouter.route("/")
  .get(getAllSuppliers)
  .post(createSupplier);

// You can extend this with more CRUD operations as needed

export { supplierRouter };
