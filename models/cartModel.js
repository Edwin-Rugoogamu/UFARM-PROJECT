const mongoose = require('mongoose')


    const cartSchema = new mongoose.Schema({

        name:{
            type:String,
            trim:true,
            default:null  
          },
          image:{
            type:String,
            default:null  
          },
          price:{
            type:String,
            trim:true,
            default:null  
          },
          qtn:{
            type:Number,
            trim:true ,
            default:null 
          },
        
            // user: {
            //   type: mongoose.Schema.Types.ObjectId,
            //   ref: 'User'
            // },
            // items: [{
            //   product: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     ref: 'Product'
            //   },
            //   quantity: Number
            // }]
          });
          
    

    module.exports = new mongoose.model("Cart",cartSchema);