import { Answer } from './../_models/answer.model';
import { Question } from './../_models/question.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions:Array<Question>;
  question:Question;
  constructor() { 
    this.questions=[{Id:1,Name:"Cau hoi so 1",CreatedDateTime:new Date(),Answers:[]},{Id:2,Name:"Cau hoi so 2",CreatedDateTime:new Date(),Answers:[]}];
    this.questions= [...this.questions, {Id:3,Name:"Cau hoi so 3",CreatedDateTime:new Date(),Answers:[]}];
    this.questions= [...this.questions, {Id:4,Name:"Cau hoi so 4",CreatedDateTime:new Date(),Answers:[]}];
    this.questions= [...this.questions, {Id:5,Name:"Cau hoi so 5",CreatedDateTime:new Date(),Answers:[]}];
    this.questions= [...this.questions, {Id:6,Name:"Cau hoi so 6",CreatedDateTime:new Date(),Answers:[]}];
    this.question =  new Question;
    this.question.Answers=[{Id:1,Name:"Cau 1",CreatedDateTime:new Date(),IsResult:false}];    
    console.log(this.questions);
  }
  onClickAddAnswer()
  {
    let Answer:Answer;
    Answer = {Id:1,Name:"Cau hoi so 1",CreatedDateTime:new Date(),IsResult:false};
    this.question.Answers=[...this.question.Answers,Answer];
  }

  ngOnInit() {
  }

}
