const userModel = require ('../models/user.model');
const userServices = require('../services/user.service')
// const {validationResult} = require('express-validator')
const {validationResult} = require('express-validator')





//writing the logic for registring user
module.exports.registerUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname,email,password} = req.body;

    const hashedPassword = await userModel.hashedPassword(password);

    const user = await userServices.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    });

    //genrating token where the funcn created earlier in userModel JWT token
    const token = user.genrateAuthToken();

    res.status(201).json({token,user});
}