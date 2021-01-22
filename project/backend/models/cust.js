const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const custSchema = new Schema(
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

const Cust = mongoose.model("Cust", custSchema);
module.exports = Cust;
