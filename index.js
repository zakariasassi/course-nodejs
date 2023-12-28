const express = require('express');
const router = require('./router/router');
const cors = require('cors');
const { checkSalary } = require('./middleware/Check');
const mongoose = require('mongoose');
const app = express();

const UserModel = require('./model/UserModel')



mongoose.connect('mongodb://localhost/users' , {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDb Connected")
}).catch((err) => {
    console.log(err)
})






app.use(cors())
app.use(express.urlencoded({extended : true}))




//app.use(checkSalary)
app.use(router)

app.listen(3000 , () => {
    console.log("listening on port 3000 🚀 ")
} );