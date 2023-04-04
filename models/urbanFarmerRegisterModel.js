const mongoose = require('mongoose')
const passportLocalMongoose = require("passport-local-mongoose")

const registerUrbanFarmerSchema = new mongoose.Schema({
    firstname:{
    type:String,
    trim:true,
    
  },
  secondname:{
    type:String,
    trim:true
  },
  gender:{
    type:String,
    trim:true
  },
  DORegister:{
    type:String,
    trim:true
  },
  DOBirth:{
    type:String,
    trim:true
  },
  personNo:{
    type:String,
    trim:true
  },
  otherNo:{
    type:String,
    trim:true
  },
  ninNo:{
    type:String,
    trim:true,
  },
  ward1:{
    type:String,
    trim:true,
    unique:true,
    required:true
  },
  ward2:{
    type:String,
    trim:true,
   
  },
  ward3:{
    type:String,
    trim:true
  },
  ward4:{
    type:String,
    trim:true
  },
  // uniqueNo:{
  //   type:Number,
  //   trim:true,
  //   unique:true,
  //   required:true
  // },

});
registerUrbanFarmerSchema.plugin(passportLocalMongoose, {usernameField:"email"})
module.exports =new mongoose.model("RegisterUF",registerUrbanFarmerSchema)