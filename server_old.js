const express = require('express')
//const router = express.Router()


//middleware
app.use(express.json())
app.use((req,res,next) => {

console.log(req.path,req.method)
next()
})

//route handler

// Get all workouts
app.get('/', (req,res)=>{

    res.json({mssg: "Get all workouts!"})

})


// routes
//app.use('/api/workouts',WorkoutRoutes)



module.exports = router

//listen for request
app.listen(4000, () => {
    console.log('Server is running in PORT 4000')
})


