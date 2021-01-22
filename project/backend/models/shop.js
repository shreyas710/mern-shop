const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Shop = mongoose.model("shopkeeper", shopSchema);
module.exports = Shop;
