//create schemas through mongoose mongoDB is schemaless.
//schemas define the structure of the documents and model defines how we interact with the documents
//chicken butt
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps:{
        type: Number, 
        required: true
    }, 
    weight: {
        type: Number,
        required: true
    }
}, {timestamps: true})
//timestamps property adds a create app property to tell us when the app was created and updated property to tell us when the last update was.
//create mongoose model
module.exports = mongoose.model('Workout', workoutSchema)