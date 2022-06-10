import { TinTuc } from './../../core/model/TinTuc';
import { NewsService } from './../../services/news/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  listNews: TinTuc[] = [];
  topNews: TinTuc[] = [] ;
  listImgTopNews:{id: number, linkimage: string}[] = [];
  index = 0;
  constructor(private _newsService: NewsService) { 
    
  } 
   ngOnInit(): void {
      const response = JSON.parse(localStorage.getItem('dataNews')|| ""); 
        this.topNews = [response[this.index]];   
        this.listNews = response;   
        this.listImgTopNews = this.topNews[0].images; 
  } 
  clickNewsExtra(e: any){
    this.topNews = [this.listNews[e.target.id - 1]]; 
    this.listImgTopNews = this.topNews[0].images; 
    
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
