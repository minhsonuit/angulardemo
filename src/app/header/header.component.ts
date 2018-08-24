import { UserService } from './../_services/user.service';
import { AuthGuard } from './../_guards/auth.guard';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedIn:boolean;
isLoggedIn$: Observable <boolean>; 
user$:Observable<User>;
user:User;
  constructor(private authService: UserService) { }

  ngOnInit() {
    this.authService.getLoginData();
    //this.isLoggedIn= this.authService.getIsLoggedIn();
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    this.user$=this.authService.user;
    this.user$.subscribe(data=>{
      this.user = data;
    })
  }
  logout()
  {
    this.authService.logOut()
    
  }

}
