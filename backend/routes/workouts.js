// we don't have access to the appn in this file so we use the express router
const express = require('express')
//create instance of router
const router = express.Router()
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutController')
const Workout = require("../models/workoutModel")
//GET all workouts
router.get('/', getWorkouts)
//GET a single workout
router.get('/:id', getWorkout)
//POST a new workout
router.post('/', createWorkout)
//DELETE a workout
router.delete('/:id', deleteWorkout)
//UPDATE a workout
router.patch('/:id', updateWorkout)
//export router
module.exports = router