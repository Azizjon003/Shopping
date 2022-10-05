const cli = require("cli-color");
const jwt = require("jsonwebtoken");
const AppError = require("../utility/appError");
const bcrypt = require("bcryptjs");
const catchAsync = require("../utility/catchAsync");
const db = require("../configs/db");

const JwtSecret = process.env.JWT_SECRET;
const User = db.users;
const signUp = catchAsync(async (req, res, next) => {
  const {
    first_name,
    last_name,
    username,
    email,
    phone,
    password,
    passwordConfirm,
  } = req.body;

  console.log("ishla kalla");
  const user = await User.create({
    first_name,
    last_name,
    username,
    email,
    phone,
    password,
    passwordConfirm,
  });

  console.log(user);
  if (!user) {
    new AppError("User not created", 400);
  }
  const id = user.id;
  const token = jwt.sign({ id }, JwtSecret, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(200).json({
    token: token,
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password, username } = req.body;
  if (!email || !username || !password) {
    return next(new AppError("Please provide email and password", 400));
  }
  console.log(cli.red(email));
  const user = await User.findOne({
    attributes: ["id", "email", "password", "username", "role"],
    where: {
      email,
    },
  });
  if (!user) {
    return next(new AppError("User not found", 404));
  }
  const shart = await bcrypt.compare(password, user.password);
  if (user.role === "admin") {
  }
  if (!shart) {
    new AppError("Incorrect password", 401);
  }
  const id = user.id;
  const token = jwt.sign({ id }, JwtSecret, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  console.log(cli.red(token));
  res.status(200).json({
    token,
  });
});

module.exports = {
  signUp,
  login,
};
