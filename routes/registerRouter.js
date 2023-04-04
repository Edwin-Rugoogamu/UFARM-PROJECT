const express=require("express");
const router=express.Router();
const Register2 = require("../models/registerModel");
const RegisterFO = require("../models/farmerOneRegisterModel")
const RegisterUF = require("../models/urbanFarmerRegisterModel")


router.get("/register",(req,res)=>{
    res.render("register")
})
router.post("/register" , async(req,res)=>{
    try{
        const user = new Register2(req.body);
        let userName =  await Register2.findOne({email:req.body.email})
        if(userName){
            return res.send("this unique id already exists")
        }
        else{
            await Register2.register(user,req.body.password,(error)=>{
                if (error){
                    throw error
                }
                res.redirect("/login") 
                console.log(req.body)
            })
        }
    }
    catch(error){
        res.status(400).send("Sorry Seems there is trouble accessing this page")
        console.log(error)
    }
})




// urbanFarmer
router.get("/urbanFarmerRegister",(req,res)=>{
    res.render("urbanFarmerRegister")
})
router.post("/urbanFarmerRegister" , async(req,res)=>{
    try{
        const register3 = new RegisterUF(req.body);
        await register3.save()
        res.redirect("/homepageUf")
        console.log(req.body)
    }
    catch(err){
        // res.status(400).render("register")
        console.log(err)
    }
})

// farmerone
router.get("/farmerOneRegister",(req,res)=>{
    res.render("farmerOneRegister")
})
router.post("/farmerOneRegister" , async(req,res)=>{
    try{
        const register2 = new RegisterFO(req.body);
        await register2.save()
        res.redirect("/homepageAo")
        console.log(req.body)
    }
    catch(err){
        // res.status(400).render("register")
        console.log(err)
    }
})

module.exports=router