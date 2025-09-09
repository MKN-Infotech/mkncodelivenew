require('dotenv').config()
const app = require('./src/app')
const connecttoDB = require('./src/db/db')




connecttoDB()


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})