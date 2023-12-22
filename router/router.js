const express = require('express');
const router = express.Router();



const PostsController = require('../controller/PostsController')
const UsersController = require('../controller/UsersController')
const ProductController = require('../controller/ProductController')


router.get('/add-product' ,  ProductController.addProduct)
router.post('/login' ,  UsersController.LoginUser)
router.post('/signup' ,  UsersController.SignUpUser)
router.get('/posts' , PostsController.GetALlPosts)


module.exports = router