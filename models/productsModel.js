const mongoose = require('mongoose')


    const productSchema = new mongoose.Schema({

        name:{
            type:String,
            trim:true,
            default:null  
          },
          price:{
            type:String,
            trim:true,
            default:null  
          },
          image:{
            type:String,
            default:null 
          },




    })

    module.exports = new mongoose.model("Product",productSchema);