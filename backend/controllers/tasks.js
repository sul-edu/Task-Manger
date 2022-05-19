
const getTasks = async (req,  res) => { 
   try{
   const task = await res.send('get all tasks');
   return task;
   }catch(e){
       return res.json({message:e})
   }

}
const createTask = (req, res) => {
    // just to check the post route res.send('create task');
    res.status(201).json(req.body) // showing that we send in insomnia as a body
}

const getTask = (req,  res) => {
    // res.send('single task')
    res.status(201).json({id: req.params.id}) //what ever we send after the route as id
}

const updateTask = (req,  res) => {
    // res.send('update the Task')
    res.status(201).json({id:req.params.id});
}

const deleteTask = (req,  res) => {
    // res.send('delete the task')
    res.status(200).json()
}

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };