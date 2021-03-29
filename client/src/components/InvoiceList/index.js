import "./invoicelist.css";
import InvoiceItem from "./InvoiceItem";

let invoicesTest = [
  {
    id: "1",
    paymentDue: Date.now(),
    clientName: "Dude Guy",
    total: 1200,
    status: "pending",
  },
  {
    id: 2,
    paymentDue: Date.now(),
    clientName: "Dudette Girl",
    total: 200,
    status: "paid",
  },
  {
    id: 3,
    paymentDue: Date.now(),
    clientName: "Shela Shelason",
    total: 500.99,
    status: "draft",
  },
];

const InvoiceList = ({ invoices }) => {
  let invoiceList = invoicesTest.map((invoice) => (
    <InvoiceItem key={invoice.id} invoice={invoice} />
  ));

  return <ul>{invoiceList}</ul>;
};

export default InvoiceList;
