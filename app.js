const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require("path")
const router=express.Router()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const session = require("express-session")
require("dotenv").config()
const database = require("./config/database");
app.set("view engine","pug")
app.set("views",path.join(__dirname,"views"))

const User = require("./models/registerModel")
const Product = require("./models/uploadModel")
const config = require("./config/database")

const homepage=require("./routes/homepageRouter")
const fontpage=require("./routes/fontpageRouter")
const register=require("./routes/registerRouter")
const login=require("./routes/loginRouter")
const registeredFO = require("./routes/aoRoutes")
const cart = require("./routes/cartRoutes")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




mongoose.connect(database.connect,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;
// checking if db has connected
db.once("open", ()=>{
    console.log("connected to db")
})
db.on("error",(err)=>{
    console.error(err)
})



app.use(express.static("public"))
app.use( express.static(path.join(__dirname,'public/images')));

app.use("/",homepage)
app.use("/",fontpage)
app.use("/",register)
app.use("/",login)
app.use("/",registeredFO)
app.use("/",cart)


app.get("*", (req, res)=>{
    res.status(404).send("page doesn't exist")
})



 app.listen(port, () => {
  console.log(`listen to port ${port}`);
});

// app.listen(3000,()=>{
//     console.log("listening on port 3000")
// })