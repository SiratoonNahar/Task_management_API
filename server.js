const express=require('express');
const mongodbConnection=require('./config/mongodbConnect');
const taskroutes=require('./routes/task.route')
require('dotenv').config();
const app=express()

app.use(express.json())

const PORT=process.env.PORT||5000;
app.use('/tasks',taskroutes)

app.listen(PORT,async()=>{
    try{
        await mongodbConnection;
        console.log("Mongodb Connected")
        console.log(`Serever is connected on port ${PORT}`)
    }catch(error){
        console.log(error.message)
    }
});