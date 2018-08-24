import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { IStore } from 'src/app/store/store';
import { Response } from '@angular/http';

const api="https://sgpmcaxdev01.pharmacity.vn:78/api/Ecomerce/allStore";// "http://career.pharmacity.vn/ec2/api/stores";
@Injectable({
  providedIn: 'root'
})

export class StoreService {

  constructor(private httpClient:HttpClient) { }
  getStores():Observable<IStore[]>
  {
    return this.httpClient.get<IStore[]>(api);//.map(p=>p)
    /*
    return this.httpClient.get(api)
    .map((response: Response) => <IStore[]>response.json())*/
  }
}
