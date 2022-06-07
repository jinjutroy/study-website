import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../pagelogin/login/login.component";
import {DetailmarkComponent} from "./detailmark/detailmark.component";

const routes: Routes = [{
  path: 'detailmark',
  component: DetailmarkComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagemarkRoutingModule { }
