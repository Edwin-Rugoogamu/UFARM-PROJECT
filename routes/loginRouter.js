const express=require("express");
const router=express.Router()
const passport = require("passport")
const Register2 = require("../models/registerModel");


router.get("/login",(req,res)=>{
    res.render("login")
})
    //  customer and Ao,fo,uf
    
router.post("/login",passport.authenticate("local", {failureRedirect:"/login"}), async(req,res)=>{
    req.session.user = req.user
    let userExist = await Register2.findOne({email: req.user.email,password: req.user.password});
    console.log("this user exists", userExist)
    console.log("this is the user session:",req.session)
    

    if(req.user.role =="Customer" && userExist){
        res.redirect("/homepage")
    }
    else  if(req.user.role =="Agricultural Officer" && userExist){
        res.redirect("/homepageAo")
    }
    else if(req.user.role =="farmerone" && userExist){
                res.redirect("/homepageFo")
            }
     else if(req.user.role =="urbanfarmer" && userExist){
                res.redirect("/homepageUf")
            }
    else{res.send("you are not registered")}
})
 




router.post("/logout",(req,res)=>{
    if(req.session){
        req.session.destroy((error)=>{
            if(error){
            res.status(400).send("unable to logout user")
        }else{
            return res.redirect("/login")
        }
    })
}
})

module.exports=router