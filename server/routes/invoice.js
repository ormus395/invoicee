const express = require("express");

const invoiceController = require("../controllers/invoiceController");

function getInvoiceRoutes() {
  const router = express.Router();

  router.get("/:id", invoiceController.getInvoice);
  router.get("/", invoiceController.getInvoices);

  router.post("/", invoiceController.createInvoice);

  router.put("/", invoiceController.updateInvoice);

  router.delete("/", invoiceController.deleteInvoice);

  return router;
}

module.exports = getInvoiceRoutes;
