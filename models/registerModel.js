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
  role:{
    type:String,
    trim:true
  },
  activities:{
    type:[String],
    trim:true,
    // unique:true,
  },
  password: {
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
    trim:true,
    
  },
  DOR:{
    type:String,
    trim:true,
    default:null
  },
  dobirth:{
    type:String,
    trim:true,
    default:null
  },
  ninNumber:{
    type:String,
    trim:true,
    default:null
  },
  phonenumber:{
    type:String,
    trim:true,
    default:null
  },
  othernumber:{
    type:Number,
    trim:true,
    default:null
  },
  placeOfResidence:{
    type:String,
    trim:true,
    default:null
  },
  residenceType:{
    type:String,
    trim:true,
    default:null
  },
  user:{
    type:String,
    trim:true
  },
  periodOfStay:{
    type:Number,
    trim:true,
    default:null
  },

});
registerSchema.plugin(passportLocalMongoose, {usernameField:"email"})
module.exports =new mongoose.model("Register2",registerSchema)