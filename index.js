const app = require("./server/app");
const http = require("http");
const config = require("./server/utils/config");
const mongoose = require("mongoose");

const server = http.createServer(app);

mongoose
  .connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
    console.log("Connected to the db");
    server.listen(config.PORT, () => {
      console.log("Server started on " + config.PORT);
    });
  })
  .catch((err) => {
    if (process.env.NODE_ENV !== "production") {
      console.log(err.stack);
    }

    console.log("Couldnt connect to the DB");
  });
