const express = require("express");

const { authenticateToken } = require("../middleware/auth");
const getAuthRoutes = require("./auth");
const getUserRoutes = require("./user");
const getInvoiceRoutes = require("./invoice");

function getRoutes() {
  const router = express.Router();

  router.use("/api/auth", getAuthRoutes());
  router.use("/api/users", getUserRoutes());
  router.use("/api/invoices", authenticateToken, getInvoiceRoutes());

  return router;
}

module.exports = getRoutes;
