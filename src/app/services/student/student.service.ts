import { HocSinh } from './../../core/model/hocSinh';
import { CauHoi } from '../../core/model/CauHoi';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, pipe} from 'rxjs';     

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const urlSearchId = 'https://website-truong-tieu-hoc.herokuapp.com/api/student/search?id=';  

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }  
  getStudentByID(id: string): Observable<HocSinh>{
    return this.httpClient.get<HocSinh>(urlSearchId + id).pipe();
  }  
}