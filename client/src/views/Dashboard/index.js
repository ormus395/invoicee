import { useEffect, useState } from "react";
import invoiceService from "../../services/invoice";
import InvoiceList from "../../components/InvoiceList";

const Dashboard = ({ user }) => {
  const [invoices, setInvoices] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchInvoices = async () => {};
  useEffect(() => {
    if (!isLoaded) {
      invoiceService
        .getInvoices()
        .then((invoices) => {
          console.log(invoices);
          setInvoices(invoices);
          setIsLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoaded]);

  return (
    <div>
      {isLoaded ? <InvoiceList invoices={invoices} /> : <h2>Loading</h2>}
    </div>
  );
};

export default Dashboard;
