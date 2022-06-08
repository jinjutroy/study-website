import { MonHoc } from './../../core/model/MonHoc';
import { SubjectService } from './../../services/subject/subject.service';
import { Khoi } from 'src/app/core/model/Khoi';
import { BaiGiang } from './../../core/model/BaiGiang';
import { LessionService } from '../../services/lession/lession.service';
import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/services/chapter/chapter.service';
import { ChuongHoc } from 'src/app/core/model/ChuongHoc';

@Component({
  selector: 'app-lession-page',
  templateUrl: './lession.component.html',
  styleUrls: ['./lession.component.scss']
})
export class LessionComponent implements OnInit {
  listBlock: Khoi[] = [];
  lessionImage: string = "assets/images/lession.png";  
  allListLession: BaiGiang[] = []
  listLession: BaiGiang[] = [];

  listSubject: MonHoc[] = [];
  listChapter: ChuongHoc[] = [];
  constructor(private _lessionService: LessionService, private _subjectService: SubjectService, private _chapterService: ChapterService) {
  }
  ngOnInit() { 
    const blockinStorage = JSON.parse(localStorage.getItem('dataSource') || "");
    this.listBlock.push(...blockinStorage);
    this._lessionService.getAll().subscribe(response => {
        this.allListLession.push(...response);
        this.listLession = this.allListLession;  
        // this.listLession = this.allListLession.splice(0,12);  

      });
    
  } 
  handlerOnChangeLession(e:any){ 
    this._subjectService.getSubjectbyBlock(e.target.value).subscribe(response => { 
      this.listSubject = [...response];  
      this.listChapter = [];      
    });
  }
  handlerOnChangeSubject(e: any){
    this._chapterService.getAllChapterBySubject(e.target.value).subscribe(response => {   
      this.listChapter = [...response];
    });
  }
}
