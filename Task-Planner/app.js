const http = require('http')
const url = require('url')

const pages = require('./pages')
const backend = require('./backend')

const PORT = 8100

let server = http.createServer( (req,res) => {
	res.setHeader('content-type','text/html')
	
	if(req.url != '/favicon.ico'){
		// parse the URL for just path
		var pathInfo = url.parse(req.url,true).pathname
		console.log("[LOG]: Current location: " + pathInfo)

		if(pathInfo == '/'){
			//let homepage = backend.display(pages.index)
		
			//res.end(homepage)
			res.write(backend.display(pages.index))
		}
		else if(pathInfo == '/store'){
			// take the value from the URL
			let query = url.parse(req.url,true).query
			
			backend.store(query)
			res.write(backend.display(pages.index))
			//res.end(pages.store)
		}
		else if(pathInfo == '/delete'){
			let query = url.parse(req.url,true).query
			let task_exists = backend.deleteTask(query)

			if(task_exists){
				res.write(backend.display(pages.index))
			}else{
				// if task id not available display error msg
				res.write(backend.display_deletion_error())
			}
		}
		else if(pathInfo == '/display'){
			
			backend.display(pages.table)
			//res.end(finished_table)
		}
		req.url = ""
		//res.end(backend.display(pages.index))
		res.end()
	}
})

server.listen(PORT,()=>console.log(`listening @ http://localhost:${PORT}`))