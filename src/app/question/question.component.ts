import { QuestionModalComponent } from './../question-modal/question-modal.component';
import { QuestionService } from './../_services/question.service';
import { Answer } from './../_models/answer.model';
import { Question } from './../_models/question.model';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery'
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit,AfterViewInit {

  questions:Array<Question>;
  question:Question;
  display:String;
  @ViewChild(QuestionModalComponent)
  private modal:QuestionModalComponent
  constructor(private questionService:QuestionService,private modalService: NgbModal) { 
   this.initQuestion();
  }
  ngAfterViewInit() {
  }
  openFormModal() {
    const modalRef = this.modalService.open(QuestionModalComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
      console.log("xxx")
    }).catch((error) => {
      console.log(error);
      console.log("error")
    });
  }
  initQuestion()
  {
    this.question =  new Question;
    this.question.CreatedDateTime=new Date();
    this.question.Answers=[{Id:0,Name:"Cau 1",CreatedDateTime:new Date(),IsResult:false}]; 
  }
  onClickAddAnswer()
  {
    let Answer:Answer;
    Answer = {Id:1,Name:"Cau hoi so 1",CreatedDateTime:new Date(),IsResult:false};
   
    this.question.Answers=[...this.question.Answers,Answer];
  }
  onAddNewQuestion()
  {
    console.log(this.question)
    this.questionService.postQuestion(this.question).subscribe((data:Question)=>{
      this.questions=[...this.questions,data];
      this.initQuestion()
      $("#modal-create").hide();
      $("#modal-create").removeClass("in")
      $('body').removeClass('modal-open');
      $(".modal-backdrop").remove();
    })
    //console.log(this.question)
  }

  count = 0;
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  run()
  {/*
    setInterval(()=>{
      console.log(`Time :${this.count++} value ${this.getRandomInt(1000)}`)
    },10)*/

  }

  ngOnInit() {
    this.questionService.getQuestions().subscribe((data:Question[])=>{
      this.questions=data;

      //console.log(this.questions)
     /* this.questions=[{Id:1,Name:"Cau hoi so 1",CreatedDateTime:new Date(),Answers:[]},{Id:2,Name:"Cau hoi so 2",CreatedDateTime:new Date(),Answers:[]}];
      this.questions= [...this.questions, {Id:3,Name:"Cau hoi so 3",CreatedDateTime:new Date(),Answers:[]}];
      this.questions= [...this.questions, {Id:4,Name:"Cau hoi so 4",CreatedDateTime:new Date(),Answers:[]}];
      this.questions= [...this.questions, {Id:5,Name:"Cau hoi so 5",CreatedDateTime:new Date(),Answers:[]}];
      this.questions= [...this.questions, {Id:6,Name:"Cau hoi so 6",CreatedDateTime:new Date(),Answers:[]}];*/
    })
    this.display="";
  }
  onSelectedQuestion(question:Question)
  {
    this.question=question;
    this.modal.open1()
    
  }

}
