import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../pagelogin/auth.service";
import {Diem} from "../../model/Diem";
import {HocSinh} from "../../model/hocSinh";
import {DiemRequest} from "../../dto/DiemRequest";

@Injectable({
  providedIn: 'root'
})
export class MarkService {
  private readonly api = 'https://website-truong-tieu-hoc.herokuapp.com/api';
  private readonly JWT = this.authService.getToken() || "";
  headers = new HttpHeaders({
    'Authorization': 'Bearer ' +this.JWT
  })
  constructor(private http:HttpClient,private authService:AuthService) {

  }
  getMarkByIdStudent(id:string){
    return this.http.get<Diem[]>(this.api+'/diem/'+id,{headers: this.headers});
  }
  getListStudentByidTeacher(id:string)
  {
    return this.http.get<HocSinh[]>(this.api+'/student/list/'+id,{headers: this.headers});
  }
  updateMarkSudentByMark(diemRequest:DiemRequest){
    return this.http.put<any>(this.api+'/diem/hocSinh',diemRequest,{headers: this.headers});
  }

}
