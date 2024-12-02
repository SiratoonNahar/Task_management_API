const express=require('express');
const authenticateToken = require('../middlewares/authmiddleware');
const taskRouter=express.Router();
const {createTask,
    getTask,
    getTaskbyId,
    updateTask,
    deleteTask}=require('../controllers/task.controller')

taskRouter.post('/create',authenticateToken,createTask);
taskRouter.get('/gettask',authenticateToken,getTask);
taskRouter.get('/:id',authenticateToken,getTaskbyId);
taskRouter.put('/:id',authenticateToken,updateTask);
taskRouter.delete('/:id',authenticateToken,deleteTask)

module.exports=taskRouter