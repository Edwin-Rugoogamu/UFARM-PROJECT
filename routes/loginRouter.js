const express=require("express");
const router=express.Router()
const passport = require("passport")
const Register2 = require("../models/registerModel");

router.get("/login",(req,res)=>{
    res.render("login")
})


router.post("/login",passport.authenticate("local", {failureRedirect:"/login"}), async(req,res)=>{
    req.session.user = req.user
    let userExist = await Register2.findOne({email: req.user.email,password: req.user.password});
    console.log("this user exists", userExist)
    console.log("this is the user session:",req.session)
    res.redirect("/homepage")
})



module.exports=router