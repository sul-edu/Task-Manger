const mongoose = require('mongoose');
// const {Schema} = mongoose.Schema;

const TaskSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:[true, 'must provide name'],   //simple validation for schema
        trim:true,
        maxlength:[20, 'name can not be more than 20 character']   //simple validation
    },
    completed:{
        type:Boolean,
        default:false
    },
});


module.exports = mongoose.model('task', TaskSchema);