const userModel=require('../models/user.model');


//this funcn has only one role to create user
module.exports.createUser = async({
    firstname,lastname,email,password
}) => {
    if(!firstname  || !email   || !password){
        throw new Error ('All fields are required')
    }
    const user = await userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })


    return user;
}