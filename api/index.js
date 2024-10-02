const express = require('express');
const mongoose = require('mongoose');
const userRouter  = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
const app = express();
require('dotenv').config();



mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('connected to db');

}).catch((err) => {
    console.log(err);

})
app.use(express.json());

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on port  ${PORT}`);
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

//error middleware
app.use((err,req,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })

})