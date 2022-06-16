import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListNewComponent} from "./list-new/list-new.component";
import {CreateNewComponent} from "./create-new/create-new.component";

const routes: Routes = [{
  path:'list-new',component:ListNewComponent},{
  path:'create-new',component:CreateNewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerNewRoutingModule { }
