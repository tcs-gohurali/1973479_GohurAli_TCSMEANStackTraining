const express = require("express")
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = 8100

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")


})

io.on("connection",(socket)=>{
    console.log("client connected to application..........")

    socket.on("chat", (msg)=>{
        // We need to unpack the message & display the message
        console.log(`[${msg['name']}]:  ${msg['msg']}`)
    })
})
http.listen(PORT,()=>console.log(`[LOG]: Listening @ http://localhost:${PORT}/`))