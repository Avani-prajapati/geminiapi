const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
require('dotenv').config()


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const funcall = async (req,res)=>{
 try{   
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const prompt = req.body.promt;
const image = {
  inlineData: {
   
    data: Buffer.from(fs.readFileSync("./public/images/"+req.body.filedata.name)).toString("base64"),
    mimeType: req.body.filedata.type,
   
  },
};

const result = await model.generateContent([prompt, image]);
res.status(200)
.send(result.response.text());

}
catch{
  return  res.status(400)
    .send("error occure")
 }

}


module.exports={
    funcall
}