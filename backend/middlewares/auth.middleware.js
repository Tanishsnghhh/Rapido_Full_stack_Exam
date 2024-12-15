const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//middleware funcn for token match for user is right , auth by two ways cookie and headers.auth
module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

if(!token){
    return res.status(401).json({message:'unauthorized'});   
}

const isBlackListed = await userModel.findOne({token:token});
if(isBlackListed){
    return res.status(401).json({message:'unauthorized'})
}

//dcrypt doing by try catch
try{
    const decoded =jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id)

    req.user = user;
    return next();
}
catch(err){
    return res.status(401).json ,({message:'unauthorized'})
}
}