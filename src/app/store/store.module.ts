import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { StoreComponent } from 'src/app/store/store.component';
import { StoreService } from 'src/app/store/store.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [StoreComponent],
  providers:[StoreService]
})
export class StoreModule { }
