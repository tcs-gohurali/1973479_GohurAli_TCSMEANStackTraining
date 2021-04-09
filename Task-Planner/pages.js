// Author: Gohur Ali
// Description: string templates of HTML pages for various pages

let html_page = `
<html>
	<head>
	</head>
	
	<body>
		<h1>Welcome to the Task Planner</h1>

		<div id="taskForm" style="margin:auto;width:300px;height:300px;border:5px solid black;">
			<form action="/store" method="get">
				Task ID: <input type="text" name="taskid">
				<br/>
				Employee ID: <input type="text" name="empid">
				<br/>
				Employee Name: <input type="text" name="empName">
				<br/>
				Task: <input type="text" name="task">
				<br/>

				<input type="submit" value="Submit Task">
				<input type="reset" value="Reset Form">
			</form>
		</div>

        <div id="taskDeleteForm" style="margin:50px auto;width:300px;height:50px;border:5px solid black;">
			<form action="/delete" method="get">
				Task ID: <input type="text" name="taskid">
				<br/>

				<input type="submit" value="Delete Task">
				<input type="reset" value="Reset Form">
				<span></span>
			</form>
		</div>

        <table id="taskTable">
            <thead>
            </thead>

            <tbody>
                <tr></tr>
            </tbody>
        </table>
	</body>
</html>`

let html_store = `<h1>Store page</h1>`
let html_delete = `<h1>Delete page</h1>`

let html_error = "<h1>ERROR</h1>"

let html_table = `
<table id="taskTable">
    <thead>
    </thead>

    <tbody>
    <tr></tr>
    </tbody>
</table>
`

module.exports = { 
    "index":html_page,
    "store":html_store,
    "delete":html_delete,
    "error":html_error,
    "table":html_table
}