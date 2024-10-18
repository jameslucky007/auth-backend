const express  = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const connection  = require('./utils/databaseConnection')
const app = express()
const port = process.env.PORT || 9000
const authRoutes  = require('./routes/auth.routes')

connection()

//middleware
app.use(cors(
    {
        origin:['http://localhost:3000', 'http://localhost:3001','https://devmap-dashboard.netlify.app/', 'https://developermap.netlify.app/']
    }
))
app.use(express.json())

// routes

app.use('/api/v1/auth', authRoutes)


app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})

