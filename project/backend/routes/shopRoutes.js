const express = require("express");
const shopController = require("../controllers/shopController");

const router = express.Router();

router.get("/signup", shopController.sign_up_get);
router.post("/signup", shopController.sign_up_post);
router.get("/signin", shopController.sign_in_get);
router.post("/signin", shopController.sign_in_post);

module.exports = router;
