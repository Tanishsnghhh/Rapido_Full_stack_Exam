const mongoose = require ('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:[3,'first name must be long than 3 charachters' ],

    },
    lastname:{
        type:String,
        required:false,
        minlength:[3, 'lirst name must be long than 3 charachters']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'email must be long than 5 charachters']
    },
    password:{
        type:String,
        required:true,
        select:false,
        
    },
    socketId:{
        
    }
})



// this method generates a JWT token like a gym membership card, embedding the user's unique ID (_id) as proof of identity.
// The token is signed with a secret key (gym's secret seal) to ensure authenticity and prevent tampering.

userSchema.methods.genrateAuthToken=function(){
    const token = jwt.sign({_id: this._id},process.env.JWT_SECRET);
    return token;
}
userSchema.methods.comparePassword = async function name(password) {
    return await bcrypt.compare(password, this.password )
}
userSchema.methods.hashPassword = async function name(password) {
    return await bcrypt.hash(password, 10 )
}

const userModel = mongoose.model('user',userSchema)
module.exports = userModel
//this data will be managed nicely goodly in controllers for the logic part