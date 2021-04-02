class Logger{

    display_records(records){
        console.log(records)
    }

    display_entry(records,key){
        console.log(records[key])
    }
}

module.exports = {Logger}