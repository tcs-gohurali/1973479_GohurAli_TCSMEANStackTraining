var row_count = 0
var col_count = 0
current_cells = []

function getBlogData(){
    var blog_title = document.getElementById("title").value
    var blog_desc = document.getElementById("desc").value
    var blog_image = document.getElementById("img").value

    console.log(blog_title)
    console.log(blog_desc)
    console.log(blog_image)

    postBlog(blog_title,blog_desc,blog_image)
    
    // Once submitted Clear the form
    clearBlogForm()
}

function postBlog(title,desc,img){
    console.log("Made it to postBlog!")
    if( (row_count == 0 && col_count == 0) || col_count == 3){
        current_cells = create_row()
        col_count = 0
    }
    var curr_cell = current_cells[col_count]

    var inner_html = get_inner_HTML(title,desc,img)
    curr_cell.innerHTML = inner_html
    col_count++
}

function get_inner_HTML(title,desc,img){
    return "<div class='addBlog'><h4>" + title +"</h4>" + "<br/>" + desc + "</div>"
}


function clearBlogForm(){

    document.getElementById("title").value = ""
    document.getElementById("desc").value = ""
    document.getElementById("img").value = ""

}


/////////////////////////////
// Table utils
/////////////////////////////
function create_row(){
    var table = document.getElementById('blogPostTable')
    var tbody = document.getElementsByTagName('tbody')[0]
    var new_row = tbody.insertRow(-1)
    var cell1 = new_row.insertCell(0)
    var cell2 = new_row.insertCell(1)
    var cell3 = new_row.insertCell(2)
    return [cell1,cell2,cell3]
}