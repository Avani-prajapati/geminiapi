const Joi = require('joi')
const { schema } = require('../Models/User')

const signupValidation = (req,res,next)=>{
    const Schema = Joi.object({
        name : Joi.string().min(3).max(50).required(),
        email : Joi.string().email().required(),
        password : Joi.string().min(4).max(50).required()
    })
    const {error} = Schema.validate(req.body)
    if(error){
        return res.status(400)
        .json({ message : "Bad request ", error})
    }
    next()
}

const loginValidation = (req,res,next)=>{
    const Schema = Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().min(4).max(50).required()
    })
    const {error} = Schema.validate(req.body)
    if(error){
        return res.status(400)
        .json({ message : "Bad request ", error})
    }
    next()
}

module.exports={
    signupValidation,
    loginValidation
}
