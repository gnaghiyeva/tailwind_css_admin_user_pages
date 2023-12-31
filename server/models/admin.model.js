const mongoose = require('mongoose');

//User model
const AdminModel = mongoose.model("quizAdmin", new mongoose.Schema({
    image:String,
    username: String,
    email:String,
    password:String,
    isAdmin:Boolean,
}));

module.exports = AdminModel