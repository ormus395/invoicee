require("dotenv").config();

const PORT = process.env.PORT || 3030;
const mongoUrl = function () {
  switch (process.env.NODE_ENV) {
    case "production":
      return process.env.MONGODB_URI;
    case "dev":
      return process.env.DEV_MONGODB_URI;
    case "test":
      return process.env.TEST_MONGODB_URI;
  }
};

module.exports = {
  PORT,
  mongoUrl: mongoUrl(),
};
