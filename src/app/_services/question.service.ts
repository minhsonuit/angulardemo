import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from './../_configs/url';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient:HttpClient) { }
  getQuestions()
  {
    var header= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})
    var result=this.httpClient.get(BASE_URL+'/api/question',{headers:header});
    return result;
  }
  postQuestion(question)
  {
    var header= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})
    //this.httpClient.post(BASE_URL+'/api/question',{headers:header})
    var result=this.httpClient.post(BASE_URL+'/api/question',question);/*.subscribe((data:any)=>{
      console.log(data)
    });*/
    return result;
  }
}
