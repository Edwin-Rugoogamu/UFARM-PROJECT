const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
const Product = require("../models/uploadModel");
const multer = require("multer");

let storage = multer.diskStorage({ 
  destination: (req, file, cb) => {cb(null, "./public/images")}, 
  filename: (req, file, cb) => {cb(null, file.originalname);
  },
});
let upload = multer({ storage: storage });


// shopping products

router.get("/homepage", async(req, res) => {

  try{
    const products= await Product.find()
    res.render("homepage",{data:products})

   }catch{
    res.render("homePage");
   }
  
});
router.post("/homepage", (req, res) => {
  res.render("homePage");
});

// Ao

router.get("/homepageAo", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render("homepageAo");
});

router.post("/homepageAo", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render("homepageAo");
});




// fo       (Uploaded Products)

router.get( "/homepageFo", async (req, res) => {
     try{
      const products= await Product.find()
      res.render("homepageFo",{data:products})

     }catch{
      res.render("homepageFo");
     }
    
   
});
router.post("/homepageFo", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.render("homepageFo");
  });



// uf  ( Upload Products)

router.get("/homepageUf", connectEnsureLogin.ensureLoggedIn(),(req, res) => {
  res.render("homepageUf");
});

router.post("/homepageUf", upload.single("image"), async (req, res) => {
  try {
    const products = new Product(req.body);
    products.image = req.file.originalname;
    await products.save();
    res.redirect("/homepageUf");
    console.log(req.body);
  } catch (error) {
    res.send("image upload failed ${error}");
  }
  // res.render("aoDash")
});



//Produce approve get and post route

router.get('/approve/:id', async (req, res) => {
	try {
		const updateProduct = await Product.findOne({_id:req.params.id})
    res.render('approve',{product:updateProduct});
    console.log('Product approved', updateProduct);
	} catch (error) {
		res.status(400).send('Sorry we were unable to approve product');
	}
});

router.post('/approve', async (req, res) => {
	try {
		await Product.findOneAndUpdate({_id:req.query.id}, req.body);
    res.redirect('/homepageFo');
	} catch (error) {
		res.status(400).send('Sorry we were unable to update product');
	}
});


module.exports = router;
