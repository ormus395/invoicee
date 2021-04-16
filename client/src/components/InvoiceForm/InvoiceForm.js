import { useState } from "react";

const InvoiceForm = () => {
  const [formState, setFormState] = useState({});
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input onChange={(e) => handleChange(e)} name="city" type="text" />
          <label htmlFor="city">Post Code</label>
          <input
            onChange={(e) => handleChange(e)}
            name="postCode"
            type="text"
          />
          <label htmlFor="city">Country</label>
          <input onChange={(e) => handleChange(e)} name="country" type="text" />
        </div>
        <fieldset>
          <legend>Bill To</legend>
          <div className="form-group">
            <label htmlFor="city">Clients Name</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientName"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Clients Email</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientEmail"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Street Address</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientStreet"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientCity">City</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientCity"
              type="text"
            />
            <label htmlFor="clientPostCode">Post Code</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientPostCode"
              type="text"
            />
            <label htmlFor="clientCountry">Country</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientCountry"
              type="text"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default InvoiceForm;
