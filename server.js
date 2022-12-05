//backend - server.js - hansel delos santos Nov. 29,2022
require('dotenv').config()
const express = require('express')

const mongoose = require('mongoose')
const WorkoutRoutes = require("./routes/workouts")

// express app
const app=express()

//middleware
app.use(express.json())
app.use((req,res,next) => {

console.log(req.path,req.method)
next()
})


// routes
app.use('/api/workouts',WorkoutRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    
//listen for request
app.listen(process.env.PORTNO, () => {
    console.log('Connected to the Server and listening in PORT',process.env.PORTNO)
})
})

.catch((error) => {
    console.log(error)
}
)





