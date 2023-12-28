const UserModel = require("../model/UserModel");

exports.create = async (req, res) => {
  await UserModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => {
      res.json({
        msg: "User created successfully",
        state: 1,
        data: user,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        msg: "internal server error",
        state: 0,
      });
    });
};

exports.find = async (req, res) => {
  await UserModel.find()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.findOne = async (req, res) => {
  await UserModel.findOne({ name: req.params.name })
    .then((user) => {
      if (user === null) {
        return res.json({
          msg: "Cant find user",
          state: 1,
          data: user,
        });
      }
      res.json({
        msg: "User found successfully",
        state: 1,
        data: user,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        msg: "internal server error",
        state: 0,
      });
    });
};
