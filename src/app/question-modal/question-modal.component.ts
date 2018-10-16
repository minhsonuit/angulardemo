import { Answer } from './../_models/answer.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { Question } from '../_models/question.model';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css']
})
export class QuestionModalComponent implements AfterViewInit   {
  @ViewChild("content") content: TemplateRef<any>;
  closeResult: string;
  @Input() question:Question
  

  constructor(private modalService: NgbModal) {}
  ngAfterViewInit() {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:"lg",windowClass:'animated slideInUp'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open1()
  {
    this.modalService.open(this.content);   
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onClickAddAnswer()
  {
    let Answer:Answer;
    Answer = {Id:0,Name:"Cau hoi so 1",CreatedDateTime:new Date(),IsResult:false};   
    this.question.Answers=[...this.question.Answers,Answer];
  }
}
