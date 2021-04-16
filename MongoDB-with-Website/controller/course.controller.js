const CourseModel = require('../model/course.model')
const path = require('path')
const { Mongoose } = require('mongoose')
// define fns for routes here
let display_index = (req,res) => {
    res.sendFile(path.resolve(__dirname +"/../public/index.html"))
}

let showAddCoursePage = (req,res)=>{
    res.sendFile(path.resolve(__dirname +"/../public/store.html"))
}

let showUpdateCoursePage = (req,res)=>{
    res.sendFile(path.resolve(__dirname +"/../public/update.html"))
}

let showDeleteCoursePage = (req,res) => {
    res.sendFile(path.resolve(__dirname +"/../public/delete.html"))
}


let addCourse = (req,res) => {

    let course = new CourseModel({
        _id:req.body.cid,
        courseName:req.body.cname,
        description:req.body.desc,
        amount:req.body.amnt
    })
    course.save((error,data)=>{
        if(!error){
            console.log("[LOG]: Inserted!")
        }else{
            console.log("[ERROR]: Insertion failure.")
            console.log(error)
        }
    })
    res.sendFile(path.resolve(__dirname +"/../public/store.html"))
}

let updateCourse = (req,res) => {
    CourseModel.updateOne({_id:req.body.cid},{$set:{amount:parseInt(req.body.amnt)}},(error,data)=>{
        if(!error){
            res.send("[LOG]: Success! Updated course")
        }else{
            //res.send("[ERROR]: Update failure")
            res.send(error)
        }
    })
}

let deleteCourse = (req,res) => {
    CourseModel.deleteOne({_id:req.body.cid},(error,data)=>{
        if(!error){
            res.send("[LOG]: Success! Deleted course")
        }else{
            //res.send("[ERROR]: Update failure")
            res.send(error)
        }
    })
}


let retrieveCourseList = (req,res) => {
    let display_page = require('../public/display')
    
    CourseModel.find({},(error,data)=>{
        if(!error){
            //res.json(data)

            let display_page_b = display_page.split("<tr></tr>")[0]
            let display_age_a = display_page.split("<tr></tr>")[1]

            let course_rows = []
            for(let [idx,course] of data.entries()){
                let row = `<tr><td>${course['_id']}</td><td>${course['courseName']}</td><td>${course['description']}</td><td>${course['amount']}</td></tr>`
                //course_rows.push(row)
                display_page_b += row
            }

            let full_page = display_page_b + display_age_a
            res.send(full_page)



        }else{
            res.send(error)
        }
    })
}

module.exports = {
    display_index,
    showAddCoursePage,
    addCourse,
    retrieveCourseList,
    showUpdateCoursePage,
    updateCourse,
    showDeleteCoursePage,
    deleteCourse

}