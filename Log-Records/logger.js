const fs = require("fs");
class Logger{

    log_path = ""

    constructor(log_path){
        this.log_path = log_path;
    }

    create_log_file(){
        console.log("=== Creating Log File ===")
        fs.writeFileSync(this.log_path,"")
    }

    display_entry(records){
        fs.writeFileSync(this.log_path,JSON.stringify(records),{flag:'a'})
    }

    display_records(data_loc){
        data = fs.readFileSync(data_loc,"utf-8")
        fs.writeFileSync(this.log_path,"======== Current Stored Records ========",{flag:'a'})
        fs.writeFileSync(this.log_path,data,{flag:'a'})
    }

    // display_entry(records,key){
    //     fs.writeFileSync(this.log_path,records[key],{flag:'a'})
    // }



    output_log(){}

    delete_log(){
        fs.unlinkSync("log.txt")
    }
}

module.exports = {Logger}