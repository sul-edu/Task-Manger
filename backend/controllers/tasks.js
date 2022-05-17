
const getTasks = (req,  res) => { 
    res.send('get all tasks');

}
const createTask = (req, res) => {
    res.send('create task');
}

const getTask = (req,  res) => {
    res.send('single task')
}

const updateTask = (req,  res) => {
    res.send('update the Task')
}

const deleteTask = (req,  res) => {
    res.send('delete the task')
}

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };