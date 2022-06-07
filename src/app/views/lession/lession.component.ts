import { BaiGiang } from './../../core/model/BaiGiang';
import { LessionService } from '../../services/lession/lession.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lession-page',
  templateUrl: './lession.component.html',
  styleUrls: ['./lession.component.scss']
})
export class LessionComponent implements OnInit {
   
  lessionImage: string = "assets/images/lession.png"; 

  ls:any;
  allListLession: BaiGiang[]= [
  ]  
  listLession: BaiGiang[] = [];
  constructor(private _lessionService: LessionService) {   
  } 
 ngOnInit() { 
  this._lessionService.getAll()
  .subscribe(response => {
    this.allListLession.push(...response) ;    
    this.listLession = this.allListLession.splice(0,12);    
     
   });
  }
  
}
