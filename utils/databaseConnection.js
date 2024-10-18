const mongoose = require('mongoose')

const connection = () =>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{

        console.log('Database connected ✅');
    }).catch((err)=>{
        console.log(err);
        console.log('Database not connected ❌');
    })
}

module.exports = connection