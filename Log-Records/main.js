const logger = require('./logger')
const reader = require('readline-sync') 
const fs = require('fs')

console.log(logger)

l = new logger.Logger()

fname = reader.question("What is your first name? ")
lname = reader.question("What is your last name? ")
gender = reader.question("What is your gender? ")
email = reader.question("What is your email? ")
current_date = Date.now()

record = {
    "fname":fname,
    "lname":lname,
    "gender":gender,
    "email":email,
    "current_date":current_date
}

l.display_records(record)

// Open Existing JSON File
data = fs.readFileSync("records.json","utf-8")
records_data = JSON.parse(data)

// Append to the existing JSON
records_data["people"].push(record)

fs.writeFileSync("records.json",JSON.stringify(records_data,null,4))