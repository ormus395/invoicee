import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import invoiceService from "../../services/invoice";

const Invoice = () => {
  const params = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    invoiceService
      .getInvoice(params.id)
      .then((response) => console.log(response));
  }, []);

  console.log(params);

  return <h1>I am the invoice page</h1>;
};

export default Invoice;
