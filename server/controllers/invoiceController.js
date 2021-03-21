const Invoice = require("../models/invoice");
const User = require("../models/user");
const { getTotal } = require("../utils/helpers");

const getInvoices = async (req, res, next) => {
  let id = req.user.id;

  let invoicesOwnedByUser = await Invoice.find({ owner: id });

  res.json(invoicesOwnedByUser);
};

const createInvoice = async (req, res, next) => {
  const { user } = req;
  const { body } = req;

  // check for draft save
  // if the draft flag isnt set, then the fields NEED to be required

  if (body.status !== "draft") {
    if (
      !body.status ||
      !body.paymentDue ||
      !body.description ||
      !body.paymentTerms ||
      !body.clientName ||
      !body.clientEmail ||
      !body.items
    ) {
      return res.status(406).json({ error: "Missing required field" });
    }

    let {
      status,
      paymentDue,
      description,
      paymentTerms,
      clientName,
      clientEmail,
      items,
    } = body;

    try {
      const newInvoice = await new Invoice({
        status,
        paymentDue,
        description,
        paymentTerms,
        clientName,
        clientEmail,
        items,
        total: getTotal(items),
        owner: user.id,
      }).save();
      const updatedUser = await User.findById(user.id);
      updatedUser.invoices = updatedUser.invoices.concat(newInvoice._id);

      await updatedUser.save();

      return res.json(newInvoice);
    } catch (err) {
      return next(err);
    }
  } else {
    try {
      const newInvoice = await new Invoice({
        paymentDue: body.paymentDue,
        description: body.description,
        clientName: body.clientName,
        clientEmail: body.clientEmail,
        owner: user.id,
        items: body.items,
        total: getTotal(body.items),
      }).save();

      const dbUser = await User.findById(user.id);
      dbUser.invoices = dbUser.invoices.concat(newInvoice._id);

      dbUser.save();

      return res.json(newInvoice);
    } catch (err) {
      next(err);
    }
  }
};

const updateInvoice = async (req, res, next) => {
  // updated invoices require all fields
  // this is due to switching from draft to [pending/paid]
  let { body } = req;
  if (
    !body.status ||
    !body.paymentDue ||
    !body.description ||
    !body.paymentTerms ||
    !body.clientName ||
    !body.clientEmail ||
    !body.items
  ) {
    return res.status(406).json({ error: "Missing required field" });
  }
  try {
    let updatedInvoice = await Invoice.findOneAndUpdate(
      {
        _id: body._id,
        owner: req.user.id,
      },
      {
        status: body.status,
        paymentDue: body.paymentDue,
        description: body.description,
        clientName: body.clientName,
        clientEmail: body.clientEmail,
        owner: req.user.id,
        items: body.items,
        total: getTotal(body.items),
      }
    );

    res.json(updatedInvoice);
  } catch (err) {
    return next(err);
  }
};

const deleteInvoice = async (req, res, next) => {
  const userId = req.user.id;
  const invoiceId = req.body.invoiceId;

  try {
    const invoiceToDelete = await Invoice.findOne({
      _id: invoiceId,
      owner: userId,
    });

    if (!invoiceToDelete) {
      return res
        .status(404)
        .json({ error: "Looks like there was no invoice to delete" });
    }

    if (invoiceToDelete.owner.toString() !== userId) {
      res.status(401).json({ error: "You do not have permission to do that" });
    }

    await Invoice.deleteOne({ _id: invoiceToDelete._id });

    const user = await User.findById(userId);
    user.invoices = user.invoices.filter(
      (invoice) => invoice._id.toString() !== invoiceToDelete._id.toString()
    );

    await user.save();

    res.status(204).json({ message: "Invoice deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
