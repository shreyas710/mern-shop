const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const custSchema = new Schema(
  {
    name:{
      type: String,
      required: true,
      trim:true,
      lowercase:true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
      trim:true,
      lowercase:true,
      validate(value){
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid')
        }
      }
    },
    password: {
      type: String,
      required: true,
      minlength : 6,
      trim:true,
    },
    phone :{
      type:String,
      unique:true,
      required:true,
      minlength:10,
      maxlength:10,
      trim:true,
      validate(value){
        if(!validator.isMobilePhone(value)){
          throw new Error('Phone number is invalid')
        }
      }
    },
    location:{
      type:String,
      required:true,
      lowercase:true,
      trim:true
    },
    address:{
      type:String,
      required:true,
      trim:true
    },
    tokens:[{
      token:{
        type:String,
        required:true
      }
    }]
  },
  { timestamps: true }
);

custSchema.methods.toJSON = function(){
  const cust = this
  const custObject = cust.toObject()

  delete custObject.password;

  return custObject;
}

custSchema.methods.generateCustAuthToken = async function(){
  const cust = this
  const token = jwt.sign({_id: cust._id.toString()},"aakashshreyaskunal")

  cust.tokens = cust.tokens.concat({token})
  await cust.save()
  return token
}

custSchema.statics.findByCredentials = async (email,password) => {
  const cust = await Cust.findOne({email})
  
  if(!cust){
    throw new Error('Unable to login!')
  }

  const isMatch = await bcrypt.compare(password,cust.password);

  if(!isMatch){
    throw new Error('Unable to login!')
  }

  return cust;
}

custSchema.pre('save' ,async function (next){
  const cust = this

  if(cust.isModified('password')){
      cust.password = await bcrypt.hash(cust.password, 8)
  }
  next();
})

const Cust = mongoose.model("Cust", custSchema);
module.exports = Cust;
