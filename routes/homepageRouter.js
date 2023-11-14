const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
const Product = require("../models/uploadModel");
const Cart = require("../models/cartModel");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
let upload = multer({ storage: storage });

// shopping products  HOMEpage

router.get(
  "/homepage",
  connectEnsureLogin.ensureLoggedIn(),
  async (req, res) => {
    try {
      const products = await Product.find({ status: "Approved" });
      res.render("homepage", { data: products });
    } catch {
      res.render("homePage");
    }
  }
);
router.post("/homepage", upload.single("image"), async (req, res) => {
  try {
    const products = new Cart(req.body);
    let userName = await Cart.findOne({ name: req.body.name });
    products.image = req.file.originalname;
    if (userName) {
    } else {
      await products.save();
      res.redirect("/homepage");
      console.log(req.body);
      console.log("xxxxxxxxx");
    }
  } catch (error) {
    res.send("image upload failed ${error}");
  }
  //   if(userproduct){
  //      const productIndex = userproduct.items.findIndex(pdt => pdt.product == productid)

  //      if(productIndex > -1){
  //       const existproduct = userproduct.items[productIndex]

  //       existproduct.quantity +=1
  //       userproduct.items[productIndex]= existproduct
  //       await Cart.save()

  //      }
  //      else{
  //       userproduct.items.push({productid ,qty})
  //      userproduct.user
  //       await userproduct.save()
  //        res.redirect("/homepage");
  //      }

  //   }else{
  //     await Cart.create(
  //       {user:userid,items:[{product:productid}]}
  //     )
  //     res.redirect("/homepage");
  //   }
  //   // products.image = req.file.originalname;
  //   // await products.save();
  //   // res.redirect("/homepage");
  //   // console.log(req.user);
  //   // console.log(req.body);

  // } catch (error) {
  //   res.send("image upload failed ${error}" + error);
  // }
});

// Ao

router.get("/homepageAo", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render("homepageAo");
});

router.post("/homepageAo", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render("homepageAo");
});

// fo       (Uploaded Products)

router.get("/homepageFo", async (req, res) => {
  try {
    const products = await Product.find();
    res.render("homepageFo", { data: products });
  } catch {
    res.render("homepageFo");
  }
});
router.post("/homepageFo", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render("homepageFo");
});

// uf  ( Upload Products)

router.get("/homepageUf", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
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

router.get("/approve/:id", async (req, res) => {
  try {
    const updateProduct = await Product.findOne({ _id: req.params.id });
    res.render("approve", { product: updateProduct });
    console.log("Product approved", updateProduct);
  } catch (error) {
    res.status(400).send("Sorry we were unable to approve product");
  }
});

router.post("/approve", async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/homepageFo");
  } catch (error) {
    res.status(400).send("Sorry we were unable to update product");
  }
});

router.get("/customerBookings", async (req, res) => {
  try {
    const checks = await Cart.find();
    res.render("customerBookings", { data: checks });
  } catch {
    res.render("customerBookings");
  }
});
router.post(
  "/customerBookings",
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => {
    res.render("customerBookings");
  }
);

module.exports = router;
