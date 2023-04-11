const express= require('express')
const router=express.Router()
const connectEnsureLogin = require("connect-ensure-login")

router.get("/homepage",connectEnsureLogin.ensureLoggedIn(),(req,res)=>{
    res.render("homePage")
})
// router.post("/homepage",(req,res)=>{
//     res.render("homePage")
// })
router.get("/homepageAo",connectEnsureLogin.ensureLoggedIn(),(req,res)=>{
    res.render("homepageAo")
})
router.post("/homepageAo",connectEnsureLogin.ensureLoggedIn(),(req,res)=>{
    res.render("homepageAo")
})
router.get("/homepageFo",connectEnsureLogin.ensureLoggedIn(),(req,res)=>{
    res.render("homepageFo")
})
router.get("/homepageUf",connectEnsureLogin.ensureLoggedIn(),(req,res)=>{
    res.render("homepageUf")
})
// router.get("/registeredFarmerOnes",(req,res)=>{
//     res.render("registeredFarmerOnes")
// })
// router.get("/registeredFarmerOnes",(req,res)=>{
//     res.render("registeredFarmerOnes")
// })

module.exports=router