const logger = require('./logger')
const reader = require('readline-sync') 
const fs = require('fs')

console.log(logger)

iters = parseInt(reader.question("How many records would you like to enter? "))

queries = {
    fname:'What is your first name? ',
    lname:'What is your last name? ',
    gender:'What is your gender? ',
    email:'What is your email? '
}

l = new logger.Logger("log.txt",queries)

for(let i = 0; i < iters; i++){
    record = l.promptUser()
    l.log_record_JSON("records.json",record)
}