import { ChiTietThoiKhoaBieu } from 'src/app/core/model/ChiTietThoiKhoaBieu';
import { Lop } from './../../core/model/Lop';
import { Khoi } from './../../core/model/Khoi';
import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  khoi = 0;
  lop = 0;
  listBlock: Khoi[] = [];
  listClass: Lop[] = [];
  lesson1: ChiTietThoiKhoaBieu[] = [];
  lesson2: ChiTietThoiKhoaBieu[] = [];
  lesson3: ChiTietThoiKhoaBieu[] = [];
  lesson4: ChiTietThoiKhoaBieu[] = [];
  lesson5: ChiTietThoiKhoaBieu[] = [];
  constructor(private _scheduleService: ScheduleService) { }

  ngOnInit(): void {
    const blockinStorage = JSON.parse(localStorage.getItem('dataBlock')|| ""); 
    this.listBlock.push(...blockinStorage)
  }
  onChangeScheduleBlock(e: any) {
    this.khoi = e.target.value;
    this._scheduleService.getListClassByID(this.khoi).subscribe(
      response => {
        this.listClass = response;
      }
    )

  }
  onChangeScheduleClass(e: any) { 
      this.lop = e.target.value; 
  }
  searchSchedule(e: any) { 
    if(this.lop === 0) return;

    this._scheduleService.getListScheduleByID(this.lop).subscribe(
      response => {  
        this.lesson1 = [];
        this.lesson2 = [];
        this.lesson3 = [];
        this.lesson4 = [];
        this.lesson5 = [];
        response.forEach(element => {
          switch (element.thuTu) {
            case "1":
              this.lesson1.push(element);
              break;
            case "2":
              this.lesson2.push(element);
              break;
            case "3":
              this.lesson3.push(element);
              break;
            case "4":
              this.lesson4.push(element);
              break;
            case "5":
              this.lesson5.push(element);
              break;

          }
        });

      }
    )
    this.lop = 0;
  }
}
