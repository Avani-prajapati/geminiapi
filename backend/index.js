const express = require('express')
const multer = require("multer")
const {funcall} = require("./Controllers/geminians");
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./Routes/AuthRouter')
const homeRouter = require('./Routes/homeRouter');

require('dotenv').config()
require('./Models/db')
const PORT = process.env.PORT || 8080

app.get('/ping',(req,res)=>{
    res.send('PONG')
})

app.use(express.static("./public"));
app.use(bodyParser.json())
app.use(cors())
app.use('/auth',AuthRouter)
app.use("/home",homeRouter)

var storage = multer.diskStorage({
  destination : "./public/images",
  filename : function(req,file,cb){
      cb(null,file.originalname)
  }
})

var uploda = multer({storage:storage}).array('file');

app.post('/upload',function(req,res){
    uploda(req,res,function(err){
        if(err instanceof multer.MulterError){
            return res.status(500).json(err);
        }else if(err){
            return res.status(500).json(err)
        }

        return res.status(200).send(req.file);
    })
})

app.post('/geminians',funcall)


app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`)

})