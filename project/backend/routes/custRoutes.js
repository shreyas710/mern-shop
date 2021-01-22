const express = require("express");
const custController = require("../controllers/custController");

const router = express.Router();

router.get("/signup", custController.sign_up_get);
router.post("/signup", custController.sign_up_post);
router.get("/signin", custController.sign_in_get);
router.post("/signin", custController.sign_in_post);

module.exports = router;
