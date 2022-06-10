import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import { BaiGiang } from 'src/app/core/model/BaiGiang';
import {BaiGiangRequest} from "../../core/dto/BaiGiangRequest";
import {AuthService} from "../../core/services/pagelogin/auth.service";

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://website-truong-tieu-hoc.herokuapp.com/api/baiGiang';
const apiLessionByIdUrl = "https://website-truong-tieu-hoc.herokuapp.com/api/baiGiang/";
@Injectable({
  providedIn: 'root'
})
export class LessionService {
  private readonly JWT = this.authService.getToken() || "";
  headers = new HttpHeaders({
    'Authorization': 'Bearer ' +this.JWT
  })
  constructor(private httpClient:HttpClient,private authService:AuthService) { }

  getAll():Observable<BaiGiang[]>{
    return this.httpClient.get<BaiGiang[]>(apiUrl).pipe();
  }
  getLessionById(id: number): Observable<BaiGiang>{
    return this.httpClient.get<BaiGiang>(apiLessionByIdUrl+id).pipe();
  }
  getLessionByChapterAndSubject(idChapter: number, idSubject: number): Observable<BaiGiang[]>{
    return this.httpClient.get<BaiGiang[]>(apiLessionByIdUrl+"search?idmon="+idSubject+"&idchuong="+idChapter).pipe();

  }
  getLessionByName(name: string): Observable<BaiGiang[]>{
    return this.httpClient.get<BaiGiang[]>(apiLessionByIdUrl+"search?name="+name);
  }

  createLession(baiGiang:BaiGiangRequest){
    return this.httpClient.post<BaiGiangRequest>(apiLessionByIdUrl+'create',baiGiang)
  }
}
