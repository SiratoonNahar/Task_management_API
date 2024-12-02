const mongoose=require('mongoose');
const taskschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:100
    },

    description:{
        type:String,
        default:''
    },
    status:{
        type:String,
        enum:['TODO','Inprogress','completed'],
        default:'TODO'
    },
    priority:{
        type:String,
        enum:['Low','Medium','High'],
        default:'Low'
    },
    dueDate:{
        type:Date,
        default:null
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
});

const Task = mongoose.model('Task',taskschema);
module.exports=Task
