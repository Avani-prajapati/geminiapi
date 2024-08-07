const express = require('express')
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
app.use((req, res, next) => {
    const Logtime = new Date(Date.now());
    if(req.path != "/appIcon.ico"){
    console.log(
      `Method : ${req.method} \n Path : ${req.path} \n Time : ${Logtime} \n`
    )}
    next();
  });
app.use(bodyParser.json())
app.use(cors())
app.use('/auth',AuthRouter)
app.use("/home",homeRouter)

app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`)

})