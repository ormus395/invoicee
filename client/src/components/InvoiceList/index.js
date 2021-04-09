import "./invoicelist.css";
import InvoiceItem from "./InvoiceItem";

const InvoiceList = ({ invoices }) => {
  let invoiceList = invoices.map((invoice) => (
    <InvoiceItem key={invoice._id} invoice={invoice} />
  ));

  return <ul>{invoiceList}</ul>;
};

export default InvoiceList;
