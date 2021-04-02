const fs = require("fs");
const reader = require('readline-sync')
class Logger{

    log_path = ""
    queries = null

    constructor(log_path,queries){
        this.log_path = log_path;
        this.queries = queries
    }

    create_log_file(){
        fs.writeFileSync(this.log_path,"=== Creating Log File ===\n")
        fs.writeFileSync(this.log_path,"")
    }

    promptUser(){
        let record = {}
        for(let [k,v] of Object.entries(this.queries)){
            let user_input = reader.question(v)
            record[k] = user_input
        }
        fs.writeFileSync(this.log_path,"****** User Inputted the Following *******\n",{flag:'a'})
        fs.writeFileSync(this.log_path,JSON.stringify(record),{flag:'a'})
        return record
    }

    log_record_JSON(json_loc,record){

        let data = fs.readFileSync(json_loc,"utf-8")
        let records_data = JSON.parse(data)

        // Append to the existing JSON
        records_data["people"].push(record)

        fs.writeFileSync(json_loc,JSON.stringify(records_data,null,4))
        fs.writeFileSync(this.log_path,"****** Appended Entry to JSON *******\n",{flag:'a'})
    }

    display_entry(records){
        fs.writeFileSync(this.log_path,JSON.stringify(records) + "\n",{flag:'a'})
    }

    display_records(data_loc){
        data = fs.readFileSync(data_loc,"utf-8")
        fs.writeFileSync(this.log_path,"======== Current Stored Records ========\n",{flag:'a'})
        fs.writeFileSync(this.log_path,data + "\n",{flag:'a'})
    }



    output_log(){}

    delete_log(){
        fs.unlinkSync("log.txt")
    }
}

module.exports = {Logger}