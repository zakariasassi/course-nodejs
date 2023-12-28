const express = require('express');
const router = express.Router();



const UsersController = require('../controller/UsersController')



router.post('/create' ,  UsersController.create)
router.get('/find' ,  UsersController.find)
router.get('/findOne/:name' ,  UsersController.findOne)






module.exports = router