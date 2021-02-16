const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const prodSchema = new Schema(
    {
        name:{
            type: String,
            trim:true,
            lowercase:true,
          },
        category:{
            type: String,
            trim:true,
            lowercase: true,
        },
        lowestprice: {
            type: String,
            trim:true,
            lowercase: true,
        }
    }
);