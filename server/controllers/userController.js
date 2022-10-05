const db = require("../configs/db");

const User = db.users;

const Location = db.locations;
const cli = require("cli-color");

const getAll = async (req, res) => {
  try {
    const users = await User.findAll({ include: Location }); // required:true

    res.status(200).json({
      data: users,
    });
  } catch (error) {
    console.log(cli.red(error.message));
  }
};

const add = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(cli.redBright(error.message));
  }
};

const delete1 = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(cli.red(error.message));
  }
};
const getOne = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      include: { model: Location },
    });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const update = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });

    user.first_name = req.body.first_name || user.first_name;
    user.last_name = req.body.last_name || user.last_name;
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.password = req.body.password || user.password;
    user.locationId = req.body.locationId || user.locationId;

    const newUser = await user.save();

    res.status(200).json({
      data: newUser,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
