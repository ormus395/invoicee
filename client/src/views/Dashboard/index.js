import "./dashboard.css";
import { useEffect, useState } from "react";
import invoiceService from "../../services/invoice";
import InvoiceList from "../../components/InvoiceList";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
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
      <header className="flex dashboard-header">
        <div className="dashboard-title">
          <h1>Invoices</h1>
          <p>{invoices.length}</p>
        </div>
        <div className="filter-container">
          <h2>Filter</h2>
          <Dropdown
            dropdownState={{
              closed: true,
            }}
          >
            <div className="checkbox-group">
              <input type="checkbox" name="paid" id="" />
              <label htmlFor="paid">Paid</label>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" name="pending" id="" />
              <label htmlFor="pending">Pending</label>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" name="draft" id="" />
              <label htmlFor="draft">Draft</label>
            </div>
          </Dropdown>
        </div>
        <Button>New</Button>
      </header>
      {isLoaded ? <InvoiceList invoices={invoices} /> : <h2>Loading</h2>}
    </div>
  );
};

export default Dashboard;
