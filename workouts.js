//backend/routes - workouts.js - hansel delos santos Nov. 29,2022
const express = require("express")
const { default: mongoose } = require("mongoose")
const router = express.Router()
const Workout = require('../models/workoutModels')

// route handlers
//GET all workouts
router.get('/', async(req,res)=>{
    const Workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(Workouts)
   
})

//GET a single record
router.get('/:id', async(req,res)=>{
    
    const{ id } =req.params
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workouts!'})
    }
        res.status(200).json(workout)
    
})

//POST a new record
router.post('/', async(req,res)=>{
    const {title, load, reps} = req.body
    //add doc to db
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
        
    }
  
})

//Delete a record
router.delete('/:id', async(req,res)=>{
    const{ id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workouts!'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(400).json({error: 'No such workouts!'})
    }
        res.status(200).json(workout)
    //res.json({mssg: 'Delete a record'})
})

//update a record
router.patch('/:id', async(req,res)=>{
    const{ id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workouts!'})
    }
    const workout = await Workout.findByIdAndUpdate({_id: id},{
        ...req.body
    })
    if(!workout){
        return res.status(400).json({error: 'No such workouts!'})
    }
    res.status(200).json(workout)
    //res.json({mssg: 'Update a record'})
})

module.exports = router
