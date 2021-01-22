const express = require("express");
const custController = require("../controllers/custController");

const router = express.Router();

router.get("/SignUp", custController.sign_up_get);
router.post("/SignUp", custController.sign_up_post);
router.get("/SignIn", custController.sign_in_get);
router.post("/SignIn", custController.sign_in_post);

module.exports = router;
