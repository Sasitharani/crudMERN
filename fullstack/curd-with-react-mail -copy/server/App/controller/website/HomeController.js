const { ObjectId } = require("mongodb");
const { dbConnection } = require("../../../dbConnection");
const { transporter } = require("../../../mailConfig");
const Swal = require('sweetalert2');

let studentInsert = async (req, res) => {


    let { uname, email, phone } = req.body;
    let obj = {
        uname,
        email,
        phone
    };
    if(req.file){
        if (req.file.filename){
            obj['photo']=req.file.filename
        }
    }
    try {
        Swal.fire('Working');
        let db = await dbConnection();
        let studentTable = await db.collection("student");
        let finalres = await studentTable.insertOne(obj);
        let emailExists = await studentTable.findOne({ "email": email });
       
        if (emailExists != undefined && emailExists !== null && emailExists !== "") {
           // Swal.fire('Email exists');
        } else {
            //Swal.fire('Email does not exist');
        }

        const info = await transporter.sendMail({
            from: '"Enquiry mail 👻" <sasitharani@gmail.com>', // sender address
            to: "sasitharani@gmail.com", // list of receivers
            subject: "Contact Enquiry Form", // Subject line
            text: "Contact Enquiry Form", // plain text body
            html: `<html>
                    <head>
                    </head>
                    <body>
                        <table border="1" cellpadding="10">
                             <tr>
                                <th>Name</th>
                                <td>${uname}</td>
                             </tr>
                             <tr>
                                <th>Email</th>
                                <td>${email}</td>
                             </tr>
                             <tr>
                                <th>Phone</th>
                                <td>${phone}</td>
                             </tr>
                        </table>
                    </body>
            </html>`, // html body
        });

        const infouser = await transporter.sendMail({
            from: '"Enquiry mail 👻" <sasitharani@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Thank You", // Subject line
            text: "Contact Enquiry Form", // plain text body
            html: `<html>
                    <head>
                    </head>
                    <body>
                        Thanks for Enquiry
                    </body>
            </html>`, // html body
        });

        let apiobj = {
            status: true,
            message: finalres
        };
        res.send(apiobj);
    } catch (error) {
        res.send(error);
    }
};

let studentView = async (req, res) => {
    let db = await dbConnection();
    let studentTable = await db.collection("student");
    let studentList = await studentTable.find().toArray();
    let obj = {
        status: 1,
        path:'http://localhost:8000/upload/student/',
        data: studentList
    };
    res.send(obj);
};

let studentDelete = async (req, res) => {
    let id = req.params.id;
    let db = await dbConnection();
    let studentTable = await db.collection("student");
    let delRes = await studentTable.deleteOne({ _id: new ObjectId(id) });
    let obj = {
        status: true,
        message: delRes
    };
    res.send(obj);
};

module.exports = { studentInsert, studentView, studentDelete };

