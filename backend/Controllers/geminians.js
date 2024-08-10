const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");


const genAI = new GoogleGenerativeAI('AIzaSyDKjmF50gGDTbjYktcXU11uE3muVwPu2pI');

const funcall = async (req,res)=>{
  console.log(req.body)
  console.log(req.body.filedata.name)
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