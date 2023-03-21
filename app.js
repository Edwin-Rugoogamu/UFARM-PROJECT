const express = require('express')
const app = express()

const router=express.Router()


app.set("view engine","pug")

app.get('/', function (req, res) {
  res.render('Hello World')
})



app.use("/",router)









app.listen(3000,()=>{
    console.log("listening on port 3000")
})