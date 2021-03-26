import axios from "axios";

const baseUrl = "/api/invoices";

const getInvoices = async () => {
  let invoices = await axios.get(`${baseUrl}`);

  return invoices;
};

const getInvoice = async (invoiceId) => {
  let invoice = await axios.get(`${baseUrl}/${invoiceId}`);

  return invoice;
};

const createInvoice = async () => {};

const updateInvoice = async (invoiceId) => {};

const deleteInvoice = async (invoiceId) => {};

export default {
  getInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
