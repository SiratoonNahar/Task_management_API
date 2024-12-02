const express=require('express');
const taskRouter=express.Router();
const {createTask,
    getTask,
    getTaskbyId,
    updateTask,
    deleteTask}=require('../controllers/task.controller')

taskRouter.post('/create',createTask);
taskRouter.get('/gettask',getTask);
taskRouter.get('/:id',getTaskbyId);
taskRouter.put('/:id',updateTask);
taskRouter.delete('/:id',deleteTask)

module.exports=taskRouter