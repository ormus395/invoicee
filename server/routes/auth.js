const express = require("express");
const authController = require("../controllers/authController");

function getAuthRoutes() {
  const router = express.Router();

  router.get("/", (req, res) => res.send("I am the auth router"));
  router.post("/login", authController.login);
  return router;
}

module.exports = getAuthRoutes;
