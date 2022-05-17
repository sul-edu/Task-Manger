const  express = require('express');
const router = express.Router();

const {getTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks')

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

//router.get('/', getTasks)
//router.post('/', createTask)
//router.put('/:id', updateTask)
//router.delete('/:id',deleteTask)
//other option
//router.route('/').get(getTasks).post(createTask)
//router.route('/postman).post(method from controller)
//router.route('/:id').put(updateTask).delete(deleteTask)

module.exports = router;