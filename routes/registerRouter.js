const express=require("express");
const router=express.Router();
const connectEnsureLogin = require("connect-ensure-login");
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
        res.status(400).send("sorry Seems there is trouble accessing this page")
        console.log(error)
    }
})

// register farmerone

router.get("/farmerOneRegister",connectEnsureLogin.ensureLoggedIn(),(req,res)=>{
    res.render("farmerOneRegister")
})

router.post("/farmerOneRegister" ,connectEnsureLogin.ensureLoggedIn(), async(req,res)=>{
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

// edit FO    edit registered farmer ones 

router.get('/edit_FO/:id', async (req, res) => {
	try {
		const farmerEdit = await Register2.findOne({_id:req.params.id})
    res.render('edit_FO', {  data:farmerEdit});
	} catch (error) {
		res.status(400).send('Sorry we were unable to update product');
	}
});

router.post('/edit_FO', async (req, res) => {
	try {
		await Register2.findOneAndUpdate({_id:req.query.id}, req.body);
    res.redirect('/registeredFarmerOnes');
	} catch (error) {
		res.status(400).send('Sorry we were unable to update product');
	}
});



module.exports=router
