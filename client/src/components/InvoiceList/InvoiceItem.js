import Status from "../Status";

const InvoiceItem = ({ invoice }) => {
  return (
    <li className="invoice-item">
      <h3>{invoice.id}</h3>
      <p>{invoice.paymentDue}</p>
      <p>{invoice.clientName}</p>
      <p>{invoice.total}</p>
      <Status status={invoice.status} />
    </li>
  );
};

export default InvoiceItem;
