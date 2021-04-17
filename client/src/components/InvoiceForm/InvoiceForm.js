import "./invoiceform.css";
import { useState } from "react";

import Button from "../Button";

const InvoiceForm = () => {
  const [formState, setFormState] = useState({
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    clientsName: "",
    clientsEmail: "",
    clientStreet: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    invoiceDate: "",
    paymentTerms: "",
    description: "",
    items: [],
  });
  const handleChange = (e) => {
    console.log(" I handle change ");
  };
  return (
    <div className="invoice-form">
      <form>
        <fieldset>
          <legend>Bill From</legend>
        </fieldset>
        <div className="form-group">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            onChange={(e) => handleChange(e)}
            name="streetAddress"
            type="text"
            value={formState.streetAddress}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            onChange={(e) => handleChange(e)}
            name="city"
            type="text"
            value={formState.city}
          />
          <label htmlFor="city">Post Code</label>
          <input
            onChange={(e) => handleChange(e)}
            name="postCode"
            type="text"
            value={formState.postCode}
          />
          <label htmlFor="city">Country</label>
          <input
            onChange={(e) => handleChange(e)}
            name="country"
            type="text"
            value={formState.country}
          />
        </div>
        <fieldset>
          <legend>Bill To</legend>
          <div className="form-group">
            <label htmlFor="city">Clients Name</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientName"
              type="text"
              value={formState.clientsName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Clients Email</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientEmail"
              type="text"
              value={formState.clientsEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Street Address</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientStreet"
              type="text"
              value={formState.clientStreet}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientCity">City</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientCity"
              type="text"
              value={formState.clientCity}
            />
            <label htmlFor="clientPostCode">Post Code</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientPostCode"
              type="text"
              value={formState.clientPostCode}
            />
            <label htmlFor="clientCountry">Country</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientCountry"
              type="text"
              value={formState.clientCountry}
            />
          </div>
          <div className="form-group">
            <label htmlFor="invoiceDate">Invoice Date</label>
            <input
              type="date"
              name="invoiceDate"
              id=""
              value={formState.invoiceDate}
            />
            <label htmlFor="paymentTerms">Payment Terms</label>
            <select value={formState.paymentTerms} name="paymentTerms" id="">
              <option value="30">Net 30 Days</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Project Description</label>
            <input type="text" />
          </div>
        </fieldset>
        <div className="item-list">
          <h2>Item List</h2>
          <div className="item-list__items"></div>
          <button>Add New Item</button>
        </div>
        <div className="invoice-form__buttons">
          <Button>Discard</Button>
          <Button>Save as Draft</Button>
          <Button>Save &amp; Send</Button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
