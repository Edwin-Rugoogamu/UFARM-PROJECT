const mongoose = require('mongoose')
const passportLocalMongoose = require("passport-local-mongoose")

const registerFarmerOneSchema = new mongoose.Schema({
    firstname:{
    type:String,
    trim:true,
    
  },
  secondname:{
    type:String,
    trim:true
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
  uniqueNo:{
    type:Number,
    trim:true,
    unique:true,
    required:true
  },
  DOR:{
    type:String,
    trim:true
  },
  gender:{
    type:String,
    trim:true
  },
  dobirth:{
    type:String,
    trim:true
  },
  ninNumber:{
    type:String,
    trim:true,
  },
  phonenumber:{
    type:String,
    trim:true
  },
  placeOfResidence:{
    type:String,
    trim:true
  },
  residenceType:{
    type:String,
    trim:true
  },
  periodOfStay:{
    type:Number,
    trim:true
  },

});
registerFarmerOneSchema.plugin(passportLocalMongoose, {usernameField:"email"})
module.exports =new mongoose.model("RegisterFO",registerFarmerOneSchema)