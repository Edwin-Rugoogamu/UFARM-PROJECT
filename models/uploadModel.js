const mongoose = require('mongoose')


const uploadSchema = new mongoose.Schema({
 
    name:{
    type:String,
    trim:true  
  },
  image:{
    type:String,  
  },
  ward:{
    type:String,
    trim:true  
  },
  date:{
    type:String,
    trim:true
  },
  price:{
    type:String,
    trim:true
  },
  quantity:{
    type:String,
    trim:true
   
  },
  mode_of_payment:{
    type:String,
    trim:true
   
  },
 directions:{
    type:String,
    trim:true
  },
  mode_of_delivery:{
    type:String,
    trim:true
  },
  produce_type:{
    type:String,
    trim:true  
  },
  productcategory:{
    type:String,
    trim:true  
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'Approved']
},

availability: {
    type: String,
    trim:true
},
 

});

module.exports =new mongoose.model("Products",uploadSchema)