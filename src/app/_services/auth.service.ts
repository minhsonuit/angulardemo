import { BASE_URL } from './../_configs/url';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  getAllTokens()
  {
    var header= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})
    var result=this.httpClient.get(BASE_URL+'/api/RefreshTokens',{headers:header});
    return result;
  }
}
