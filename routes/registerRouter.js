const express=require("express");
const router=express.Router();
const Register2 = require("../models/registerModel");
// const RegisterFO = require("../models/farmerOneRegisterModel")
// const RegisterUF = require("../models/urbanFarmerRegisterModel")



// customer and fo
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




// register urbanFarmer
router.get("/urbanFarmerRegister",(req,res)=>{
    res.render("urbanFarmerRegister")
})

router.post("/urbanFarmerRegister" , async(req,res)=>{
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
                res.redirect("/homepageFo") 
                console.log(req.body)
            })
        }
    }
    catch(error){
        res.status(400).send("Sorry Seems there is trouble accessing this page")
        console.log(error)
    }
})

// register farmerone
router.get("/farmerOneRegister",(req,res)=>{
    res.render("farmerOneRegister")
})

router.post("/farmerOneRegister" , async(req,res)=>{
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
                res.redirect("/homepageAo") 
                console.log(req.body)
            })
        }
    }
    catch(error){
        res.status(400).send("Sorry Seems there is trouble accessing this page")
        console.log(error)
    }
})

// router.get("/homePageAo", async(req,res)=>{
//     try{
//         let items = await Register2.find(req.body.role)
//         if(req.body.role == "farmerone"){
//         res.render("homepageAo",{farmers:items})}
//     }
//     catch(err){
//         console.log(err)
//         res.send("failed to retrieve farmer details")
//     }
// })




module.exports=router
// {role:"urbanfarmer",ward:farmerWard}
// farmerWard