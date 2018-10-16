import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from './../_configs/url';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpClient:HttpClient) { }
  getTokens()
  {
    var header= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})
    var result=this.httpClient.get(BASE_URL+'/api/RefreshTokens',{headers:header});
    return result;
  }
}
