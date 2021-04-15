const fs = require('fs')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const config = {
	URL: "mongodb://localhost:27017",
	db_name:"calls",
	table_name:"callRecords"
}

const CallRecordsSchema = mongoose.Schema({
	_id:Number,
	source:String,
	destination:String,
	sourceLocation:String,
	destinationLocation:String,
	callDuration:String,
	roaming:String,
	callCharge:String
})

function open_data(loc){
	return JSON.parse(fs.readFileSync(loc,'utf-8'))
}

function emplate_into_DB(data){

	console.log("== Using Mongoose to Insert data ==")
	const vars = {
		useNewUrlParser: true,
		useUnifiedTopology:true
	}

	mongoose.connect(config['URL'] + "/" + config['db_name'],vars)
	const db = mongoose.connection

	db.on("error",(err)=>console.log(err))
	db.once("open",()=>{
		const ProductModel = mongoose.model("",CallRecordsSchema,config['table_name'])
		ProductModel.insertMany(data,(error,result)=>{
			if(!error){
				console.log("Inserted!")
			}
			else{
				console.log(error.message)
			}
			mongoose.disconnect()
		})	
	})
}


let data = open_data('call_data.json')
emplate_into_DB(data)