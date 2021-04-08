const http = require('http')
const fs = require('fs')
const url = require('url')
const pages = require('./pages')

function create_storage_file(){}

function store(query){
	console.log("[LOG]: Storing the following query: ")
	// convert to obj
	task = {
		"taskid": query.taskid,
		"empid" : query.empid,
		"empName" : query.empName,
		"task" : query.task
	}
	console.log(task)

	let task_data = JSON.parse(fs.readFileSync("data.json","utf-8"))
	
	// store records in obj using array push method
	task_data['tasks'].push(task)

	// convert to string & store using fs module
	fs.writeFileSync("data.json",JSON.stringify(task_data,null,4))
}

function display(){
	let task_data = JSON.parse(fs.readFileSync("data.json","utf-8"))

	let json2rows = (task_arr) => {
		let table_rows = []
		for(let [idx,item] of task_arr.entries()){
			let col1 = `<td>${item['taskid']}</td>`
			let col2 = `<td>${item['empid']}</td>`
			let col3 = `<td>${item['empName']}</td>`
			let col4 = `<td>${item['task']}</td>`
			let row = `<tr>${col1}${col2}${col3}${col4}</tr>`
			table_rows.push(row)
		}
		return table_rows
	}

	let table_rows = json2rows(task_data['tasks'])
	// console.log(table_rows)

	let table_start = pages.index.split('<tr></tr>')[0]
	let table_end = pages.index.split('<tr></tr>')[1]
	for(let row of table_rows){
		table_start += row
	}
	let finished_table = table_start + table_end
	// console.log(finished_table)

	return finished_table
}

function deleteTask(query){
	let tid = parseInt(query.taskid)
	console.log("[LOG]: DELETING the following query: ")
	console.log("--> " + tid + " of type: " + typeof(tid))
	
	// read from file & convert to json
	let task_data = JSON.parse(fs.readFileSync("data.json","utf-8"))

	// check val using iterator or loop
	let tid_exists = (task_id,arr) => {
		for(let [idx,item] of arr.entries()){
			if(item['taskid'] === task_id){
				return idx
			}
		}
		return -1;
	}
	let tid_idx = tid_exists(tid.toString(),task_data['tasks'])
	console.log("idx ==) " + tid_idx)

	if(tid_idx != -1){
		console.log("[LOG]: Found the task")
		// delete using arr methods
		task_data['tasks'].splice(tid_idx,1)
		
		// store in file using fs module
		fs.writeFileSync("data.json",JSON.stringify(task_data,null,4))
		return true;
	}
	else{
		console.log("[LOG]: Didn't find the task")
		return false;
	}
}

let server = http.createServer( (req,res) => {
	
	if(req.url != '/favicon.ico'){
		// parse the URL for just path
		var pathInfo = url.parse(req.url,true).pathname
		console.log("[LOG]: Current location: " + pathInfo)

		if(pathInfo == '/'){

			let homepage = display()
			
			res.setHeader('content-type','text/html')
			res.end(homepage)

			// res.setHeader('content-type','text/html')
			// res.end(pages.index)
		}
		else if(pathInfo == '/store'){
			// take the value from the URL
			let query = url.parse(req.url,true).query
			
			store(query)

			res.setHeader('content-type','text/html')
			res.end(pages.store)
		}
		else if(pathInfo == '/delete'){
			let query = url.parse(req.url,true).query
			let task_exists = deleteTask(query)

			if(task_exists){
				res.setHeader('content-type','text/html')
				res.end(pages.delete)
			}else{
				// if task id not available display error msg
				res.setHeader('content-type','text/html')
				res.end(pages.error)
			}
		}
		else if(pathInfo == '/display'){
			// read from file & convert to json
			let task_data = JSON.parse(fs.readFileSync("data.json","utf-8"))

			// create tableData variable using backticks
			// <table>
			// 	<tr>
			// 		<td>${varName}</td>
			// 	</tr>
			// </table>
			// res.end(tableData)

			let json2rows = (task_arr) => {
				let table_rows = []
				for(let [idx,item] of task_arr.entries()){
					let col1 = `<td>${item['taskid']}</td>`
					let col2 = `<td>${item['empid']}</td>`
					let col3 = `<td>${item['empName']}</td>`
					let col4 = `<td>${item['task']}</td>`
					let row = `<tr>${col1}${col2}${col3}${col4}</tr>`
					table_rows.push(row)
				}
				return table_rows
			}

			let table_rows = json2rows(task_data['tasks'])
			console.log(table_rows)

			let table_start = pages.table.split('<tr></tr>')[0]
			let table_end = pages.table.split('<tr></tr>')[1]
			for(let row of table_rows){
				table_start += row
			}
			let finished_table = table_start + table_end
			console.log(finished_table)
			res.setHeader('content-type','text/html')
			res.end(finished_table)
		}
		res.end()
		
	}
})

let PORT = 8100
server.listen(PORT,()=>console.log(`listening @ http://localhost:${PORT}`))