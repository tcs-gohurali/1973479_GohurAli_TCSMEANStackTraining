import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  quizData = {}

  questions:Array<string> = []
  choices:Array<Array<string>> = []
  solutions:Array<string> = []

  constructor(public service:QuizService) { }

  ngOnInit(): void {
    this.loadData()
    //this.prepData()
  }

  loadData(){
    this.service.loadQuizDetails().subscribe(data=>{
      this.quizData = data;
      console.log(this.quizData)
    })
  }

  showData(){
    console.log((this.quizData))
    this.prepData()
    console.log(this.choices)
  }

  prepData(){
    let data = JSON.stringify(this.quizData)
    let json_data = JSON.parse(data)
    let num_questions = json_data["questions"].length

    for(let idx=0; idx < num_questions; idx++){
      let question_details = json_data["questions"][idx]
      this.questions.push(question_details["question"])
      this.choices.push(question_details["choices"])
      this.solutions.push(question_details['solution'])
    }
  }

}
