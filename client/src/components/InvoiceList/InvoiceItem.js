import { Link } from "react-router-dom";
import Status from "../Status";

const InvoiceItem = ({ invoice }) => {
  return (
    <li key={invoice._id} className="invoice-item">
      <Link to={`dashboard/${invoice._id}`}>
        <h3>{invoice._id}</h3>
        <p className="invoice-item__info">{invoice.paymentDue}</p>
        <p className="invoice-item__info">{invoice.clientName}</p>
        <h2>{invoice.total}</h2>
        <Status status={invoice.status} />
      </Link>
    </li>
  );
};

export default InvoiceItem;
