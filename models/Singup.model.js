const mongoose  = require('mongoose')

const SignupSchema = new  mongoose.Schema({

    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String
    }

},{timestamps: true})

module.exports = mongoose.model('signup', SignupSchema)