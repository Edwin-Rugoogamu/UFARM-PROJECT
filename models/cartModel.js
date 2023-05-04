const mongoose = require('mongoose')

const me = mongoose.Schema.Types.ObjectId
    const cartSchema = new mongoose.Schema({

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
      quantity:{
        type:Number,
        default:1 
      },
      status: {
        type: String,
        default: 'Book',
        enum: ['Book', 'Order']
    },
    email:{
      type:String,
      default:null 
    },
    phonenumber:{
      type:Number,
      default:null 
    },
   
    })

          
    

    module.exports = new mongoose.model("Cart",cartSchema);