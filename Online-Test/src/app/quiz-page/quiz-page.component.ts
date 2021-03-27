import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
  providers: [QuizService]
})
export class QuizPageComponent implements OnInit {

  constructor(public service:QuizService) { }

  // Fields ---
  data_obj:any = {}

  async ngOnInit() {
    await this.loadData()
    this.service.prepData()
  }

  async loadData(){
    await this.service.loadQuizDetails().then(data=>{
        this.data_obj = data;
        console.log(this.data_obj)
      })
    // this.service.loadQuizDetails().subscribe(data=>{
    //   this.data_obj = data;
    //   console.log(this.data_obj)
    // })
    console.log("--- DONE Loading Data ---")
    console.log(this.data_obj)
    this.service.setData(this.data_obj)
    console.log("HICKORY DICKORY DOCK")
    console.log(this.service.quizData)
    console.log("*****************************")
  }



}
