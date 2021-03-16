var row_count = 0
var col_count = 0

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
    // Create Blog Div
    // var table = document.getElementById('blogPostTable')
    // var tbody = document.getElementsByTagName('tbody')[0]
    // var new_row = tbody.insertRow(tbody.length)
    // var cell = new_row.insertCell(0)

    // var inner_html = get_inner_HTML(title,desc,img)
    // cell.innerHTML = inner_html

    if(row_count == 0 && col_count == 0){
        var table = document.getElementById('blogPostTable')
        var tbody = document.getElementsByTagName('tbody')[0]
        var new_row = tbody.insertRow(tbody.length)
        var cell = new_row.insertCell(0)
        row_count++
        col_count++

        var inner_html = get_inner_HTML(title,desc,img)
        cell.innerHTML = inner_html
    }
    else if(row_count < 3){

    }
    else if(row_count == 3){
    // Create Blog Div
    var table = document.getElementById('blogPostTable')
    var tbody = document.getElementsByTagName('tbody')[0]
    var new_row = tbody.insertRow(tbody.length)
    var cell = new_row.insertCell(0)

    var inner_html = get_inner_HTML(title,desc,img)
    cell.innerHTML = inner_html
    }
    
}

function get_inner_HTML(title,desc,img){
    return "<div class='addBlog'><h4>" + title +"</h4>" + "<br/>" + desc + "</div>"
}


function clearBlogForm(){

    document.getElementById("title").value = ""
    document.getElementById("desc").value = ""
    document.getElementById("img").value = ""

}