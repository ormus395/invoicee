/* TODO
    Need to loop over invoice items and generate html
*/

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import invoiceService from "../../services/invoice";

import Status from "../../components/Status";

const Invoice = () => {
  const params = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    invoiceService.getInvoice(params.id).then((response) => {
      setInvoice(response);
    });
  }, []);

  console.log(params);

  return (
    <div className="main-wrapper">
      <nav className="nav">
        <Link to="/dashboard">Back</Link>
      </nav>
      {invoice ? (
        <>
          <div className="invoice-status">
            <p>Status</p>
            <Status status={invoice.status} />
            <div className="invoice-status__controls"></div>
          </div>
          <div className="invoice-body">
            <div className="invoice-head">
              <h3>{invoice._id}</h3>
              <p>{invoice.description}</p>
            </div>
            <div className="owner-address"></div>
            <div className="invoice-info">
              <div className="invoice-info__dates">
                <div className="">
                  <p>Invoice Date</p>
                  <h3>This is the invoice date, needs to be added to model</h3>
                </div>
                <div className="">
                  <p>Payment Due</p>
                  <h3>{invoice.paymentDue}</h3>
                </div>
              </div>
              <div className="invoice-info__billing">
                <p>Bill To</p>
                <h3>{invoice.clientName}</h3>
                <address>
                  this will be clients address, need to add to the invoice model
                </address>
              </div>
              <div className="invoice-info__email">
                <p>Sent To</p>
                <a href={`mailto:${invoice.clientEmail}`}>
                  {invoice.clientEmail}
                </a>
              </div>
            </div>
            <div className="invoice-items"></div>
          </div>
        </>
      ) : (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      )}
      <footer className="invoice-footer"></footer>
    </div>
  );
};

export default Invoice;
