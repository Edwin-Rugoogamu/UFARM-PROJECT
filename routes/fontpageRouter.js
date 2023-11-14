const express=require("express");
const router=express.Router()

router.get("/",(req,res)=>{
    res.render("fontpage")
})
router.post("/",(req,res)=>{
    res.render("fontpage")
})

module.exports=router