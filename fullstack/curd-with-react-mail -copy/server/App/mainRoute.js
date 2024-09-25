let express=require("express")
const { homeapi } = require("./routes/website/homeapiRoute")
let mainRoute=express.Router()
mainRoute.use("/website/home",homeapi)
module.exports={mainRoute}