const Shop = require("../models/shop");
var path = require("path");

const sign_up_post = (req, res) => {
  const user = new Shop(req.body);
  user
    .save()
    .then((result) => {
      res.redirect("/shops/signin");
    })
    .catch((err) => {
      console.log(err);
    });
};

const sign_up_get = (req, res) => {
  res.sendFile(path.resolve("views/custSignUp.html"));
};

const sign_in_get = (req, res) => {
  res.sendFile(path.resolve("views/custSignIn.html"));
};

const sign_in_post = (req, res) => {
  Shop.find(req.body)
    .then((result) => {
      if (result[0] === undefined) {
        res.status(404).sendFile(path.resolve("views/404.html"));
      } else {
        res.redirect("/mart");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  sign_up_post,
  sign_up_get,
  sign_in_get,
  sign_in_post,
};
