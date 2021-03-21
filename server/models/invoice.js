const mongoose = require("mongoose");
const { Schema } = mongoose;

const invoiceSchema = new Schema({
  status: {
    type: String,
    enum: ["draft", "pending", "paid"],
    default: "draft",
    required: true,
  },

  paymentDue: {
    type: Date,
  },
  description: String,
  paymentTerms: Number,
  clientName: String,
  clientEmail: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  items: [],
  total: Number,
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
