const express= require('express')
const router=express.Router()
 

router.get("/homepage",(req,res)=>{
    res.render("homePage")
})
// router.post("/homepage",(req,res)=>{
//     res.render("homePage")
// })
router.get("/homepageAo",(req,res)=>{
    res.render("homepageAo")
})
router.post("/homepageAo",(req,res)=>{
    res.render("homepageAo")
})
router.get("/homepageFo",(req,res)=>{
    res.render("homepageFo")
})
router.get("/homepageUf",(req,res)=>{
    res.render("homepageUf")
})

module.exports=router