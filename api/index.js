const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();



mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('connected to db');

}).catch((err) => {
    console.log(err);

})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on port  ${PORT}`);
})