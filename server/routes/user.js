const express = require("express");

const userController = require("../controllers/userController");

function getUserRoutes() {
  const router = express.Router();

  router.get("/", (req, res) => res.send("I am the user router"));
  router.post("/register", userController.register);
  return router;
}

module.exports = getUserRoutes;
