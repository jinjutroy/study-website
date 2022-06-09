import { TinTuc } from './../../core/model/TinTuc'; 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, pipe } from 'rxjs'; 

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
const apiUrl = 'https://website-truong-tieu-hoc.herokuapp.com/api/listNew';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    constructor(private httpClient: HttpClient) { }

    getAllNews(): Observable<TinTuc[]> {
        return this.httpClient.get<TinTuc[]>(apiUrl).pipe(); 
    }
}