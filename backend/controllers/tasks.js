const { tasks } = require("fontawesome");
const { findById } = require("../models/Task");
const Task = require("../models/Task");

const getTasks = async (req,  res) => { 
   try{
   const tasks = await Task.find({})
   //res.status(200('get all tasks');
   //res.status(200).json({task, amount:tasks.length} or data:{tasks, nbhits:tasks.length});
   return res.status(200).json({tasks});
   }catch(e){
       return res.json({message:e})
   }

}
const createTask = async (req, res) => {
   try{
    // just to check the post route res.send('create task');
    // res.status(201).json(req.body) // showing that we send in insomnia as a body
    const task = await Task.create(req.body);
    return res.status(201).json({task})
   } catch(e){
       return res.status(500).json({message:e})
   }
}

const getTask = async (req,  res) => {
   try{
        // res.send('single task')
       const {id} = req.parama.id;
       const task = await Task.findById({_id: id}); 
       if(!id){
           return res.status(404).json({message:`no id was found :${id}`});  //if id not found
       }   
    res.status(200).json({task}) //what ever we send after the route as id
   } catch(e){
       return res.status(500).json({message : e})
   }
}

const updateTask = async (req,  res) => {
    try{
        // res.send('update the Task')
        const {id: taskid} = req.params;
        const {body} = req;
        const task =
    res.status(201).json({id:req.params.id});
    }
}

const deleteTask = async (req,  res) => {
   try{
       // res.send('delete the task')
       const {id : taskid} = req.params;
       const task = await Task.findOneAndDelete({_id :taskid});
       if(!task){
        return res.status(404).json({message:`no id was found :${id}`});  //if id not found
    }   
    //res.status(200).send()
    //res.status(200).json({task: null, status:'success'})
    res.status(200).json({task});
   }catch(e){
       return res.status(500).json({message : e})
   }
}

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };