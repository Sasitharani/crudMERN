let express=require("express")
const { studentInsert, studentView, studentDelete } = require("../../controller/website/HomeController")
const { uploads } = require("../../middleware/fileUpload")
let homeapi=express.Router()

homeapi.post("/student-insert",uploads.single('photo'),studentInsert)
homeapi.get("/student-view",studentView)
homeapi.delete("/student-delete/:id",studentDelete)
module.exports={homeapi}