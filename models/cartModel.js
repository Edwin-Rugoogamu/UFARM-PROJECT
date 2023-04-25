const mongoose = require('mongoose')

const me = mongoose.Schema.Types.ObjectId
    const cartSchema = new mongoose.Schema({

        
            user: {
              type: me,
              ref: 'Register2'
            },
            items: [{
              product: {
                type: String,
                ref: 'Products'
              },
              quantity: {
                type:Number,
                default:1
              }
            }]
          });

          
    

    module.exports = new mongoose.model("Cart",cartSchema);