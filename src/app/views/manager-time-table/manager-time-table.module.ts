import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerTimeTableRoutingModule } from './manager-time-table-routing.module';
import { UpdateTimeTableComponent } from './update-time-table/update-time-table.component';


@NgModule({
  declarations: [
    UpdateTimeTableComponent
  ],
  imports: [
    CommonModule,
    ManagerTimeTableRoutingModule
  ]
})
export class ManagerTimeTableModule { }
