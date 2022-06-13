import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateTimeTableComponent} from "./update-time-table/update-time-table.component";

const routes: Routes = [{
  path:'updateTimeTable',component:UpdateTimeTableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerTimeTableRoutingModule { }
