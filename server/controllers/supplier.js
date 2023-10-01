import Supplier from "../models/supplier.js";

export const getAllSuppliers = async (req, res) => {
  const suppliers = await Supplier.find({});
  res.status(200).json(suppliers);
};

export const createSupplier = async (req, res) => {
  const supplier = await Supplier.create(req.body);
  res.status(201).json(supplier);
};

// You can extend this with more CRUD operations as needed
