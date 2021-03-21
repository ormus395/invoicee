const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
  const { body } = req;

  if (!body.email || !body.password) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  try {
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const match = await bcrypt.compare(body.password, user.passwordHash);

    if (!match) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    let userForToken = {
      id: user._id.toString(),
      name: user.name,
    };

    const token = jwt.sign(userForToken, process.env.JWTSECRET);

    res.status(200).json({ token, email: user.email, name: user.name });
  } catch (err) {
    next(err);
  }
};

module.exports = { login };
