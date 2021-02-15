const Shop = require("../models/shop");
var path = require("path");

const sign_up_post = async (req, res) => {
  const user = new Shop(req.body)
  try{
     await user.save()
    //  const token = await user.generateShopAuthToken()
      res.redirect("/custs/signin");

  }catch(e){
    console.log(e);
    res.status(404).sendFile(path.resolve("views/404.html"));
  }
};

const sign_up_get = (req, res) => {
  res.sendFile(path.resolve("views/custSignUp.html"));
};

const sign_in_get = (req, res) => {
  res.sendFile(path.resolve("views/custSignIn.html"));
};

const sign_in_post = async (req, res) => {
  console.log(req.body)
  
  try{
    const user = await Shop.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateShopAuthToken()
    res.status(200).redirect("/mart")
  }
  catch(e){
    console.log(e)
    res.status(404).sendFile(path.resolve("views/404.html"));
  }
    
};

module.exports = {
  sign_up_post,
  sign_up_get,
  sign_in_get,
  sign_in_post,
};
