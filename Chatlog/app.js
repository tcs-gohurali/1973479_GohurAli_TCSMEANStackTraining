const express = require("express")
const mongoose = require("mongoose")
const Chat = require('./routes/chat.router')
const app = express()

const config = {
    PORT:8100,
    URL:"mongodb://localhost:27017/",
    db_name:"chatlog"
}

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// -- MongoDB Connectivities --
const db_config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(config['URL']+config['db_name'],db_config)
mongoose.connection

app.use("/",Chat)
app.use(express.static(__dirname+'/public'))

app.listen(config['PORT'],()=>console.log(`[LOG]: Listening @ http://localhost:${config['PORT']}/`))