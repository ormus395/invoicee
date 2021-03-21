const jwt = require("jsonwebtoken");

const extractJWT = (req, res, next) => {
  let authHeader = req.get("Authorization");
  if (authHeader) {
    req.token = authHeader.split("bearer ")[1];
  }

  next();
};

const authenticateToken = (req, res, next) => {
  let token = req.token;

  if (!token) {
    return res.status(401).json({ error: "No token, not authorized" });
  }

  jwt.verify(token, process.env.JWTSECRET, (err, user) => {
    if (process.env.NODE_ENV !== "production") console.log(err);
    if (err)
      return res
        .status(403)
        .json({ error: "There was an issue authenticating" });
    req.user = user;
    console.log("in jwt verify", user);
    next();
  });
};

module.exports = {
  extractJWT,
  authenticateToken,
};
