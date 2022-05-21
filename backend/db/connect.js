const mongoose = require('mongoose')
    require('dotenv').config();

const connectionString = process.env.MONGO_URL;


const connectDB = (url) => {
    return mongoose.connect(connectionString,{useNewUrlParser:true, useUnifiedTopology:true })
    }
// mongoose
// .connect(connectionString, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true    
// })
// .then(() => console.log(`connected to database`))
// .catch(err => console.log(err));

module.exports = connectDB