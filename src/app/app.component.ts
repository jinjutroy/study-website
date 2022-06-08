import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'study-website';
  constructor(private _scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this._scheduleService.getAllBlock().subscribe(response => { 
      localStorage.setItem('dataSource', JSON.stringify(response));
    })
  }
}
