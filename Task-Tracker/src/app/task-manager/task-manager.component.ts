import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor(public service:TaskService) { }

  async load_data(){
    let resp = await this.service.getTask().then(result=>{
      this.service.tasks_obj = result
      console.log(this.service.tasks_obj)
    })
    console.log(this.service.tasks_obj)
    let json_stringed = JSON.stringify(this.service.tasks_obj)
    this.service.tasks_dict = JSON.parse(json_stringed)

  }

  async ngOnInit() {
    this.load_data()

  }

  addTask(info:any){
    // Post the Task to the JSON
    this.service.postTask(info)

    this.load_data()
    // Now we need to add it to the table
    console.log("Fart")
    console.log(this.service.tasks_dict)

  }
}
