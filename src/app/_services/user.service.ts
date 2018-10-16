import { Router } from '@angular/router';
import { BASE_URL } from './../_configs/url';
import { User } from './../_models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth } from '../_models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private userInfo= new BehaviorSubject<User>(null);
  constructor(private httpClient: HttpClient,
  private router: Router) { }
  registerUser(user :User)
  {
    const body: User =
    {
      UserName:user.UserName,
      PassWord:user.PassWord,
      Email:user.Email,
      FirstName:user.FirstName,
      LastName:user.LastName
    }
    var header = new HttpHeaders({'No-Auth':'True'});
    return this.httpClient.post(BASE_URL+"api/User/Register",body,{headers:header})
  }
  userAuthentication(userName,passWord)
  {
    var data = "username=" + userName + "&password=" + passWord + "&grant_type=password&client_id=ngAuthApp";
    console.log(BASE_URL + '/token')
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded'/*,'No-Auth':'True' */});
    return this.httpClient.post(BASE_URL + '/token', data, { headers: reqHeader });
    /*rs.subscribe((data:any)=>{
      //console.log(data)
      localStorage.setItem("user",JSON.stringify(data));
      var t =JSON.parse(localStorage.getItem("user"));
      let myAuth: Auth;
      myAuth = new Auth(t);
      console.log(myAuth);
      //this.userInfo.next(data)
  })
  return rs;*/
    //return this.httpClient.post(BASE_URL + '/token', data, { headers: reqHeader });
  }
  getUserClaims(){
    //return;
    var header= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})
    var result=this.httpClient.get(BASE_URL+'/api/Account/GetUserClaims',{headers:header});
    result.subscribe((data:any)=>{
      console.log(data)
      this.userInfo.next(data)
  })
    //console.log(result)
    return  result;
   }
   getLoginData()
   {
    console.log("getLoginData")
    if( localStorage.getItem('userToken'))
    {
      this.loggedIn.next(true);
      this.getUserClaims()
      console.log(localStorage.getItem('userToken'))
    } 
    else { this.loggedIn.next(false); console.log("false");}
   }
   /*getIsLoggedIn()
   {
     console.log("a")
     if( localStorage.getItem('userToken')) return true;
     return false;
   }*/
   get isLoggedIn() {
     console.log("isLoggedIn")
    return this.loggedIn.asObservable(); // {2}
  }
  get user()
  {
    
    console.log("user")
    return this.userInfo.asObservable();
  }
  logOut()
  {
    localStorage.removeItem('userToken');    
    this.loggedIn.next(false);
  this.router.navigate(['/login']);
  }
}
