const http = require('http')
const fs = require('fs')
const url = require('url')

let server = http.createServer( (req,res) => {
	if(req.url != '/favicon.ico'){
		if(req.url == '/store'){
			// take the value from the URL
			// convert to obj
			// store records in obj using array push method
			// convert to string
			// store using fs module
		}
		else if(req.url == '/delete'){
			// read from file
			// convert to json
			// check val using iterator or loop
			// delete using arr methods
			// store in file using fs module
			// if task id not available display error msg
		}
		else if(req.url == '/display'){
			// read from file
			// convert to json
			// create tableData variable using backticks
			// <table>
			// 	<tr>
			// 		<td>${varName}</td>
			// 	</tr>
			// </table>
			// res.end(tableData)
		}
	}
})

let PORT = 8100
server.listen(PORT,()=>console.log(`listening @ http://localhost:${PORT}`))

