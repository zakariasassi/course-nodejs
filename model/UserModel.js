const UserSchema = require('../schema/User')
const mongoose = require('mongoose')

const User = mongoose.model('User', UserSchema) 



module.exports = User;
