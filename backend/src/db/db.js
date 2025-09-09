const mongoose = require('mongoose')


function connecttoDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('connected to db')
    })
    .catch(()=>{
        console.log('error connecting to db')
    })
}


module.exports = connecttoDB