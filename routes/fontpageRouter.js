const express=require("express");
const router=express.Router()

router.get("/fontpage",(req,res)=>{
    res.render("fontpage")
})

module.exports=router