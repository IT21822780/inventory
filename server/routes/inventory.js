import express from "express";
import {
  getAllInventory,
  createInventory,
  getInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventory.js";
import upload from "../middleware/upload.js";

const inventoryRouter = express.Router();

inventoryRouter.route("/")
  .get(getAllInventory)
  .post(upload.single("productImage"), createInventory); 

inventoryRouter.route("/:id")
  .get(getInventory)
  .patch(updateInventory)
  .delete(deleteInventory);

export { inventoryRouter };
