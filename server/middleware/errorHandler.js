const errorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.error(err.stack);
  }

  res.status(500).json({ error: "Whoops, looks like something broke" });
};

module.exports = errorHandler;
