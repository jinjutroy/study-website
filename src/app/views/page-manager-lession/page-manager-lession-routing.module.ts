import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateLessiomComponent} from "./create-lessiom/create-lessiom.component";

const routes: Routes = [{
 path: "create-lession",component:CreateLessiomComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageManagerLessionRoutingModule { }
