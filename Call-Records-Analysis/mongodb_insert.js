const fs = require('fs')
const mongo_client = require("mongodb").MongoClient

const config = {
	URL: "mongodb://localhost:27017",
	db_name:"calls",
	table_name:"callRecords"
}

function open_data(loc){
	return JSON.parse(fs.readFileSync(loc,'utf-8'))
}

function emplate_into_DB(data){

	console.log("== Using MongoDB to Insert data ==")
	const vars = { useUnifiedTopology:true }
	mongo_client.connect(config['URL'],vars,(error,client)=>{
		if(!error){
			let db = client.db(config['db_name'])
			db.collection("callRecords").insertMany(data,(error2,result)=>{
				if(!error2){
					console.log("[LOG]: Success! Inserted!")
				}else{
					console.log('[LOG]: Insertion Error!')
					console.log(error)
				}
				client.close()
			})
		}else{
			console.log('[LOG]: Error!')
			console.log(error)
		}
	})
}

let data = open_data('call_data.json')
emplate_into_DB(data)