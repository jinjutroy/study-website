import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChiTietThoiKhoaBieu} from "../../model/ChiTietThoiKhoaBieu";

@Injectable({
  providedIn: 'root'
})
export class TabletimeService {
  private readonly api = 'https://website-truong-tieu-hoc.herokuapp.com/api';
  constructor(private http:HttpClient) { }

  getidlopByIdTeacher(id:string):Observable<number>{
    return this.http.get<number>( this.api+"/lop/"+ id);
  }
}
