const authCust = require("./../middleware/authCust");
const express = require("express");
const custController = require("../controllers/custController");

const router = express.Router();

router.get("/", custController.get_products);
router.get("/me/product/", custController.get_products_search);
router.get("/signup", custController.sign_up_get);
router.post("/signup", custController.sign_up_post);
router.get("/signin", custController.sign_in_get);
router.post("/signin", custController.sign_in_post);
router.post("/cart/save", authCust, custController.save_cart);


module.exports = router;
