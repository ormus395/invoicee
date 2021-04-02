import axios from "axios";
import authService from "./auth";

const baseUrl = "/invoices";

const getInvoices = async () => {
  const token = authService.getUserToken();
  const config = {
    headers: { Authorization: `bearer ${token}` },
  };
  let response = await axios.get(`${baseUrl}`, config);

  return response.data;
};

const getInvoice = async (invoiceId) => {
  let invoice = await axios.get(`${baseUrl}/${invoiceId}`);

  return invoice;
};

const createInvoice = async () => {
  const config = {
    headers: { Authorization: authService.token },
  };
};

const updateInvoice = async (invoiceId) => {};

const deleteInvoice = async (invoiceId) => {};

export default {
  getInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
