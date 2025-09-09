const express = require('express')
const userRoute = require('./routes/user.routes')
const cors = require('cors')



const app = express();
 app.use(express.json())
 app.use(cors())



 app.use('/api',userRoute)




module.exports = app