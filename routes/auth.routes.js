const express = require('express')
const AuthenticationController = require('../controller/Signup.controller')
const routes = express.Router()


routes.post('/signup',AuthenticationController.signupUser)
routes.post('/login',AuthenticationController.login)


module.exports  = routes