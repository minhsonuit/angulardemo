import { IStore } from './../store/store';
import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
@Input() public store: IStore
@Output() closeClick: EventEmitter<String> = new EventEmitter<String>();
//private element: JQuery;
  constructor() { }

  ngOnInit() {
  }
  close(): void {
    //this.element.hide();
   // $('body').removeClass('modal-open');
   this.closeClick.emit("");
   
}

}
