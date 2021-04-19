const ChatModel = require('../model/chat.model')
const path = require('path')

let display_index = (req,res) => {
    res.sendFile(path.resolve(__dirname+"/../public/index.html"))
}

let sendMessage = (req,res) => {
    //console.log(req.body)

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

let sendMessageSocket = (socket,next) => {
    console.log("client connected to application..........")

    
    socket.on("chat", (msg)=>{
        // We need to unpack the message & display the message
        let chat = new ChatModel({
            name:msg.name,
            message:msg.msg
        })

        console.log(`[${msg['name']}]:  ${msg['msg']}`)
        chat.save((error,data)=>{
            if(!error){
                console.log("[LOG]: Stored in DB")
            }else{
                console.log("[ERROR]: Issue with storing: " + error)
            }
        })
    })
}

module.exports = {
    display_index,
    sendMessage,
    sendMessageSocket
}