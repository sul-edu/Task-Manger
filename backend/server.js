const connectDB = require('./db/connect')

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const tasks = require('./routes/tasks');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/tasks', tasks);


app.get('/', (req,res) => {
    res.send('hello from the other side')
});
//app.get('/api/v1/tasks')   -get all the tasks
// app.post('/api/v1/tasks')  -create a new task
// app.get('/api/v1/tasks/:id')   --get a single task
// app.patch('/api/v1/tasks/:id')   --- update task
// app.delete('/api/v1/tasks/:id')  --delete task 


const start = async() => {
    try{
        await connectDB()
        app.listen(port, ()=>{
            console.log(`server is running at ${port}...`)
        })
    }catch(e){
        console.log(e)
    }
}

start();

