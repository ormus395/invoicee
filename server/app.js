const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

const getRoutes = require("./routes");
const unknownEndpoint = require("./middleware/404");
const errorHandler = require("./middleware/errorHandler");
const { extractJWT } = require("./middleware/auth");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
  app.use(cors());
}

app.use(express.json());

app.use(extractJWT);

app.use(getRoutes());
app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
