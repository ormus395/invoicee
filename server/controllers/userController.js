const bcrypt = require("bcrypt");
const User = require("../models/user");

const getUsers = async (req, res, next) => {};

const getUser = async (req, res, next) => {};

const register = async (req, res, next) => {
  const { body } = req;

  let passwordHash;
  const saltRounds = 10;
  try {
    const hashed = await bcrypt.hash(body.password, saltRounds);
    passwordHash = hashed;
  } catch (err) {
    return next(err);
  }

  let newUser = new User({
    email: body.email,
    name: body.name,
    passwordHash: passwordHash,
  });

  let createdUser = await newUser.save();

  res.json(createdUser);
};

const updateUser = async (req, res, next) => {};

const deleteUser = async (req, res, next) => {};

module.exports = {
  getUser,
  getUsers,
  register,
  updateUser,
  deleteUser,
};
