const mongoose = require('mongoose')


    const userSchema = new mongoose.Schema({


        id: {
            type:String,
            trim:true,
            unique:true,
            required:true
          },


        email:{
            type:String,
            trim:true,
            unique:true,
            
          },

        password: {
            type:String,
            trim:true,
            unique:true,
            required:true
          },


    })

    module.exports = new mongoose.model("User",userSchema);