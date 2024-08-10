const jwt = require('jsonwebtoken');
const UserModel = require('../Models/User');
const home = async (req,res)=>{

    const token = req.body.token;
    let user_id ;
    jwt.verify(
        token,
        process.env.JWT_SECRET,
        async (err,decoded)=>{
            if(err){
                return res.status(400)
                .send(err)
                
            }else{
               user_id = decoded._id;
               const user = await UserModel.findById(user_id).select("-_id -password");
               res.status(200)
               .send(user)
            }
        }
    )
}

module.exports = home
