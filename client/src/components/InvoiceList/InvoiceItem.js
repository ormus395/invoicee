import Status from "../Status";

const InvoiceItem = ({ invoice }) => {
  return (
    <li key={invoice.id} className="invoice-item">
      <h3>{invoice.id}</h3>
      <p className="invoice-item__info">{invoice.paymentDue}</p>
      <p className="invoice-item__info">{invoice.clientName}</p>
      <h2>{invoice.total}</h2>
      <Status status={invoice.status} />
    </li>
  );
};

export default InvoiceItem;
