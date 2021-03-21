const unknownEndpoint = (req, res, next) => {
  res.status(404).json({ error: "404, you might need to ask for directions" });
};

module.exports = unknownEndpoint;
