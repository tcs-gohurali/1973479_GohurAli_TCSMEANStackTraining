const express = require('express')
const router = express.Router()
const ChatController = require("../controllers/chat.controller")

router.get("/",ChatController.display_index)
//router.post("/",ChatController.sendMessage)

module.exports = router