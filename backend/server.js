require('dotenv').config()

//require express package-
const express = require('express');
//start express app
const app = express()
const workoutRoute = require('./routes/workouts')
//import mongoose
const mongoose = require('mongoose')
//middleware is any peice of code that exists between us getting a request to the server and us sending a response 
app.use((req,res,next) => {
    console.log(req.path,req.method);
    next()
})
//needed to access request body-data that we are sending to the server. Basically attaches body attribute to request object
app.use(express.json())
//setup a route handler
app.use('/api/workouts',workoutRoute)

//connect to DB
mongoose.connect(process.env.MONGO_URI).then(()=>{
    //listen for requests- a certain port number
    app.listen(process.env.PORT,()=>{
    console.log("listening on port",process.env.PORT);
});
}).catch((error) =>{console.log(error)})


   