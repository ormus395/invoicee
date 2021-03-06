const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  passwordHash: {
    type: String,
    required: true,
  },
  invoices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
    },
  ],
  address: {
    street1: {
      type: String,
    },
    street2: String,
    city: String,
    state: String,
    zipcode: String,
  },
  avatar: String,
});

userSchema.set("toJSON", {
  transform: (u) => {
    return { name: u.name, email: u.email, invoices: u.invoices };
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
