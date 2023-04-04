const mongoose = require('mongoose')
const passportLocalMongoose = require("passport-local-mongoose")

const registerSchema = new mongoose.Schema({
    firstName:{
    type:String,
    trim:true,
    
  },
  secondName:{
    type:String,
    trim:true
  },
  email:{
    type:String,
    trim:true,
    unique:true,
    
  },
  password:{
    type:String,
    trim:true,
    unique:true,
    required:true
  },
  confirmPassword:{
    type:String,
    trim:true
  },
  location:{
    type:String,
    trim:true
  },
  gender:{
    type:String,
    trim:true
  },
  customer:{
    type:String,
    trim:true
  },
  Agricultural_Officer:{
    type:Number,
    trim:true
  },
  user:{
    type:String,
    trim:true
  },

});
registerSchema.plugin(passportLocalMongoose, {usernameField:"email"})
module.exports =new mongoose.model("Register2",registerSchema)