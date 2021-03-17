var row_count = 0
var col_count = 0
current_cells = []
blogs = []

function getBlogData(){
    var blog_title = document.getElementById("title").value
    var blog_desc = document.getElementById("desc").value
    var blog_image = document.getElementById("img").value

    console.log(blog_title)
    console.log(blog_desc)
    console.log(blog_image)

    // Stores the Data in storage
    storeData(blog_title,blog_desc,blog_image)

    postBlog(blog_title,blog_desc,blog_image)
    clearBlogForm()
}

function create_row(){
    var table = document.getElementById('blogPostTable')
    var tbody = document.getElementsByTagName('tbody')[0]
    var new_row = tbody.insertRow(-1)
    var cell1 = new_row.insertCell(0)
    var cell2 = new_row.insertCell(1)
    var cell3 = new_row.insertCell(2)
    return [cell1,cell2,cell3]
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
    return "<div class='smallBlog'><h4>" + title +"</h4>" + "<br/>" + desc + "</div>"
}


function clearBlogForm(){

    document.getElementById("title").value = ""
    document.getElementById("desc").value = ""
    document.getElementById("img").value = ""

}

// Storage Functions
function storeData(title,desc,img){

    var storage_exists = checkStorageExists()

    if(storage_exists){
        // since the storage exists, we need to get it and update it
        var list_of_blogs = JSON.parse(sessionStorage.getItem('blogs'))
        blog_data = {}
        blog_data.title = title
        blog_data.desc = desc
        blog_data.img = img
        list_of_blogs.push(blog_data)
        sessionStorage.setItem("blogs",JSON.stringify(list_of_blogs))   
    }
    else{
        blog_data = {}
        blog_data.title = title
        blog_data.desc = desc
        blog_data.img = img
        blogs.push(blog_data)
        json_blog_data = JSON.stringify(blogs)
        sessionStorage.setItem("blogs",json_blog_data)
    }
}

function checkStorageExists(){
    return sessionStorage.getItem('blogs') != null
}

function getStorageData(){
    var blog_data = JSON.parse(sessionStorage.getItem("blogs"))
    return blog_data
}