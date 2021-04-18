const ChatModel = require('../model/chat.model')
const path = require('path')

let display_index = (req,res) => {
    res.sendFile(path.resolve(__dirname+"/../public/index.html"))
}

let sendMessage = (req,res) => {
    console.log(req.body)
    

    let chat = new ChatModel({
        name:req.body.name,
        message:req.body.msg
    })

    chat.save((error,data)=>{
        if(!error){
            res.send("[LOG]: Stored in DB")
        }else{
            res.send("[ERROR]: Issue with storing: " + error)
        }
    })
}

module.exports = {
    display_index,
    sendMessage
}