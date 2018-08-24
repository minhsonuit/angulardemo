import { UserService } from './_services/user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StoreComponent } from 'src/app/store/store.component';
import { User } from './_models/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.authService.getLoginData();
    this.authService.getUserClaims();
    //this.isLoggedIn= this.authService.getIsLoggedIn();
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    
   
  }
  title = 'app';
  isLoggedIn$: Observable <boolean>; 


  constructor(private authService: UserService) { }
  
}
