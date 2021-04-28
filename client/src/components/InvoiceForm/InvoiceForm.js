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

  const addInvoiceItem = (e) => {
    e.preventDefault();
    let randomId = Math.random();
    let newItem = {
      id: randomId,
      itemName: "",
      qty: 0,
      price: 0,
      total: 0,
    };

    setFormState({
      ...formState,
      items: formState.items.concat(newItem),
    });
  };

  const handleChange = (e, id) => {
    console.log(" I handle change ");
    console.log(e.target.name);
    if (id) {
      console.log("id was passed, im in an item form");
      let index = 0,
        newItem;
      for (let i = 0; i < formState.items.length; i++) {
        if (formState.items[i].id === id) {
          index = i;
          newItem = Object.assign({}, formState.items[i]);
        }
      }

      newItem[e.target.name] = e.target.value;

      let newItems = [...formState.items];
      newItems[index] = newItem;

      let newFormState = {
        ...formState,
        items: newItems,
      };

      setFormState(newFormState);
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const deleteItem = (e, id) => {
    e.preventDefault();
    console.log("Ible been clicked");
    const itemId = id;
    let changedItems = formState.items.filter((item) => {
      if (item.id !== itemId) {
        return item;
      }
    });

    console.log(changedItems);

    const changedFormState = Object.assign({}, formState);
    changedFormState.items = changedItems;
    setFormState(changedFormState);
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
              name="clientsName"
              type="text"
              value={formState.clientsName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Clients Email</label>
            <input
              onChange={(e) => handleChange(e)}
              name="clientsEmail"
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
              onChange={(e) => handleChange(e)}
              type="date"
              name="invoiceDate"
              id=""
              value={formState.invoiceDate}
            />
            <label htmlFor="paymentTerms">Payment Terms</label>
            <select
              onChange={(e) => handleChange(e)}
              value={formState.paymentTerms}
              name="paymentTerms"
              id=""
            >
              <option value="30">Net 30 Days</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Project Description</label>
            <input
              name="description"
              onChange={(e) => handleChange(e)}
              type="text"
            />
          </div>
        </fieldset>
        <div className="item-list">
          <h2>Item List</h2>
          <div className="item-list__items">
            {formState.items.map((item) => (
              <div key={item.id} className="item-list__item">
                <div className="form-group">
                  <label htmlFor="itemName">Item Name</label>
                  <input
                    name="itemName"
                    onChange={(e) => handleChange(e, item.id)}
                    type="text"
                    value={item.itemName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="qty">Qty</label>
                  <input
                    name="qty"
                    onChange={(e) => handleChange(e, item.id)}
                    type="number"
                    value={item.qty}
                  />
                  <label htmlFor="price">Price</label>
                  <input
                    name="price"
                    onChange={(e) => handleChange(e, item.id)}
                    type="text"
                    value={item.price}
                  />
                  <label htmlFor="total">Total</label>
                  <input
                    name="total"
                    onChange={(e) => handleChange(e, item.id)}
                    type="text"
                    value={item.total}
                  />
                </div>
                <button onClick={(e) => deleteItem(e, item.id)}>Delete</button>
              </div>
            ))}
          </div>
          <button onClick={(e) => addInvoiceItem(e)}>Add New Item</button>
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
