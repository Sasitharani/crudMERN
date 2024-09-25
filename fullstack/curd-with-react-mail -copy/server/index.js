let express=require("express");
let cors=require("cors")
const { mainRoute } = require("./App/mainRoute");

let app=express();
app.use(cors())
app.use(express.json())
app.use("/upload/student",express.static("upload/student"))
app.use(mainRoute)
app.listen("8000")