import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { IStore } from 'src/app/store/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],

})
export class StoreComponent implements OnInit {
stores:IStore[];
  constructor(private storeService:StoreService) { }

  ngOnInit() {
    //this.stores = this.storeService.getStores();
    this.storeService.getStores().subscribe((data:IStore[] )=>{this.stores = data,console.log(this.stores)});
    
    console.log('onInit')
  }

}
