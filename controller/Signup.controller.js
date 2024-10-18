const Signup = require('../models/Singup.model')

class AuthenticationController {
    async signupUser (req,res) {
        try{
            console.log(req.body);
            const {name, email, password} = req.body
            if(!name || !email || !password){
                return res.status(400).json({message: 'Please provide credentials'})
            }

            const existUser = await Signup.findOne({email: email})
            if(existUser) return res.status(400).json({message: 'Already register with this email'})

            const registerUser = await Signup.create(req.body)
            if(!registerUser) return res.status(500).json({message: 'Something went wrong'})
            
                return res.status(201).json({
                    status: 'success',
                    message: 'user register successfully',
                    registerUser
                })

        }catch(err){
            console.log(err);
            res.status(500).json({
                status:"fail",
                message: "Interval server error"
            })
        }
    }


    async login(req,res){
        try{
            const {email,password} = req.body
            if(!email || !password){
                return res.status(400).json({message: 'Please provide credentials'})
            }

            const user = await Signup.findOne({email: email,password: password})
            if(!user) return res.status(404).json({message: 'user not found'})

                res.status(200).json({
                    status:"success",
                    message: 'login succssfully',
                    user: user
                })

        }catch(err){
            console.log(err);
        }
    }
}

module.exports =  new AuthenticationController()