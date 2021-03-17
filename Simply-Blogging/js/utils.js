/*
Author: Gohur Ali
Project: Simply Blogging
Description: Here is the page logic for index.html
*/

// Global vars to keep track of page content
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

    // Stores the Data in localStorage
    storeData(blog_title,blog_desc,blog_image)
    //postBlog(blog_title,blog_desc,blog_image)
    postBlog2(blog_title,blog_desc,blog_image)
    clearBlogForm()
}

function postBlog2(title,desc,img){
    console.log("Made it to postBlog!")
    if(row_count == 0 && col_count == 0){
        console.log("nothing yet..")
        create_grid_row()
        col_count = 0
    }
    else if(col_count == 3){
        row_count++
        create_grid_row()
        col_count = 0
    }
    
    var curr_col = create_grid_col()
    
    var inner_html = get_inner_HTML(title,desc,img)
    curr_col.innerHTML = inner_html
    col_count++
}

function create_grid_row(){
    var gridStart = document.getElementById("blogPostsGrid")
    var new_row = document.createElement('div')
    new_row.id = row_count
    new_row.className = 'row'
    gridStart.appendChild(new_row)
}

function create_grid_col(){
    var gridStart = document.getElementById("blogPostsGrid")
    console.log(gridStart)
    console.log("curr_row num = " + row_count)
    var curr_row = document.getElementById(row_count.toString())
    console.log(curr_row)
    var new_col = document.createElement('div')
    new_col.className = 'col'
    curr_row.appendChild(new_col)
    console.log("created col...")
    return new_col
}


function postBlog(title,desc,img){
    // nested function which is responsible to inserting a new row of 3 cols
    function create_row(){
        var table = document.getElementById('blogPostTable')
        var tbody = document.getElementsByTagName('tbody')[0]
        var new_row = tbody.insertRow(-1)
        var cell1 = new_row.insertCell(0)
        var cell2 = new_row.insertCell(1)
        var cell3 = new_row.insertCell(2)
        return [cell1,cell2,cell3]
    }
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

function retreiveData(){
    //Retreive Data from storage
    var blog_data = JSON.parse(localStorage.getItem("blogs"))
    //console.log("data from SStorage = ", JSON.stringify(blog_data))

    for(var i = 0; i < blog_data.length; i++){
        //for(var i = blog_data.length - 1; i >= 0 ; i--){
        var title = blog_data[i].title
        var desc = blog_data[i].desc
        var img = blog_data[i].img
        console.log("------ " + title + " " + desc + " " + img +  " ------")
        postBlog(title,desc,img)
    }
}

function retreiveData2(){
    //Retreive Data from storage
    var blog_data = JSON.parse(localStorage.getItem("blogs"))
    //console.log("data from SStorage = ", JSON.stringify(blog_data))

    for(var i = 0, count = 1; i < blog_data.length; i++,count++){
        //for(var i = blog_data.length - 1; i >= 0 ; i--){
        var title = blog_data[i].title
        var desc = blog_data[i].desc
        var img = blog_data[i].img
        console.log("------ " + title + " " + desc + " " + img +  " ------")
        postBlog2(title,desc,img)
    }
}    

function get_inner_HTML(title,desc,img){
    if(!img){
        return `
        <div class='smallBlog'>
            <h4>${title}</h4>
            <div class="smallBlogDesc">
                <p>${desc}</p>
            </div>
        </div>`
    }
    else{
        return `
            <div class='smallBlog'>
                <h4>${title}</h4>
                <div class="smallBlogDesc">
                    <p>${desc}</p>
                </div>
                <div class="thumbnail">
                    <a href="${img}">
                        <image class="smallBlogImg" src="${img}"></image>
                    </a>
                </div>
            </div>`
    }
}

function clearBlogForm(){

    document.getElementById("title").value = ""
    document.getElementById("desc").value = ""
    document.getElementById("img").value = ""

}

// Storage Functions
function storeData(title,desc,img){
    function checkStorageExists(){
        return localStorage.getItem('blogs') != null
    }

    var storage_exists = checkStorageExists()

    if(storage_exists){
        // since the storage exists, we need to get it and update it
        var list_of_blogs = JSON.parse(localStorage.getItem('blogs'))
        blog_data = {}
        blog_data.title = title
        blog_data.desc = desc
        blog_data.img = img
        list_of_blogs.push(blog_data)
        localStorage.setItem("blogs",JSON.stringify(list_of_blogs))   
    }
    else{
        blog_data = {}
        blog_data.title = title
        blog_data.desc = desc
        blog_data.img = img
        blogs.push(blog_data)
        json_blog_data = JSON.stringify(blogs)
        localStorage.setItem("blogs",json_blog_data)
    }
}

function clearLocalStorage(){
    localStorage.clear()
}