const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
const Register2 = require("../models/registerModel");


// router.get("/registeredFarmerOnes",async(req,res)=>{
     
//     if(req.user.role == "Agricultural Officer"){
//        try{
//         let activeFarmers = await Register2.countDocuments();7
//         let newFarmerOnes = await Register2.find();
//         res.render("registeredFarmerOnes",{
//             data:newFarmerOnes, 
//             activeFarmers})
//        } catch(error){
//         res.status(404).send("could not find farmers in database")
//        }
   
// }else{res.redirect("/homepageAo")}
       
// })

// registered FarmerOnes

router.get('/registeredFarmerOnes', connectEnsureLogin.ensureLoggedIn(), async(req,res)=>{
    try{
       const farmers2= await Register2.find({role:"farmerone"})
       console.log(farmers2)
       console.log("********")
        res.render('registeredFarmerOnes',{data:farmers2})
    }
    catch(error){
        res.send("sorry you can't access this")
    }
})



module.exports=router