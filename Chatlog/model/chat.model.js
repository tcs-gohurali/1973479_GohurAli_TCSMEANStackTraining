const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const ChatSchema = mongoose.Schema({
    name:String,
    message:String
})

let CourseModel = mongoose.model("",ChatSchema,"Chats")

module.exports = CourseModel