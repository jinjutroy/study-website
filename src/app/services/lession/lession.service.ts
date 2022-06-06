import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';  
import { BaiGiang } from 'src/app/core/model/BaiGiang';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://website-truong-tieu-hoc.herokuapp.com/api/baiGiang';

@Injectable({
  providedIn: 'root'
})
export class LessionService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<BaiGiang[]>{
    return this.httpClient.get<BaiGiang[]>(apiUrl).pipe();
  }
}