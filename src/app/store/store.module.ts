import { StoreDetailComponent } from './../store-detail/store-detail.component';
import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { StoreComponent } from 'src/app/store/store.component';
import { StoreService } from 'src/app/store/store.service';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,FormsModule
  ],
  declarations: [
    StoreComponent,
    StoreDetailComponent,
  ],
  providers:[StoreService]
})
export class StoreModule { }
