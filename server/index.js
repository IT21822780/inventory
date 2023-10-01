import express from "express";
import "dotenv/config";
import cors from "cors";

import { supplierRouter } from './routes/supplier.js';

import { connection } from "./database/connection.js";

// File Routing
import { inventoryRouter } from "./routes/inventory.js";
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";

// Config
const app = express();

// Middlware
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

// API Routes
app.use("/api/v1/inventory", inventoryRouter);
app.use('/api/supplier', supplierRouter);

// Custom error handlers
app.use(notFound);
app.use((req, res) => {
  res.status(404).json({ message: "Page not found!" });
});

// app.use(errorHandlerMiddleware);
app.use((err, req, res, next) => {
  console.error(err);
  errorHandlerMiddleware(err, req, res, next);
});

const port = process.env.PORT || 9000;

const start = async () => {
  try {
    await connection(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is on ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();
