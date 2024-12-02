const Task=require('../models/task.model');

// Create Task
const createTask=async(req,res)=>{
    try{
        const task=new Task(req.body);
        await task.save
        res.status(201).send('Task is created')
    }catch(error){
        res.status(400).send(error)
    }
};

// Retrieve task

const getTask=async(req,res)=>{
    try{
        const filters={
            status:req.query.status,
            priority:req.query.priority
        };
        const sort = req.query.sort||'createdAt';
        const limit=parseInt(req.query.limit,10)||10;
        const skip=parseInt(req.query.skip,10)||0;
        const tasks=await Task.find(filters)
        .sort(sort)
        .limit(limit)
        .skip(skip)
        res.status(200).send(tasks)
    }catch(error){
        res.status(500).send(error)
    }
}

//Retrieve specific tasks

const getTaskbyId=async(req,res)=>{
    try{
        const task=await Task.findById(req.params.id);
        if(!task){
            return res.status(404).send({error:'Task is not found'})
        }
        res.status(200).send(task);
    }catch(error){
        res.status(500).send(error)
    }
};

// Update task by Id

const updateTask=async(req,res)=>{
    try{
        const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!task){
            return res.status(404).send({error:'Task not found'})
        }
        task.updatedAt=Date.now();
        await task.save();
        res.status(200).send(task)
    }catch(error){
        res.status(400).send(error)
    }
};


// Delete a specific task

const deleteTask=async(req,res)=>{
    try{
        const task=await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send({error:'Task not found'})
        }
        res.status(204).send()
    }catch(error){
        res.status(500).send(error)
    }
};


module.exports={
    createTask,
    getTask,
    getTaskbyId,
    updateTask,
    deleteTask
}