const multer =require ("multer")
let storage =multer.diskStorage({
    destination:function(req,file,callBack){
        callBack(null,"upload/student")
    },
    filename:function(req,file,callBack){
        callBack(null,Date.now()+ file.originalname)
    }
})

let uploads=multer({storage:storage})
module.exports={uploads}