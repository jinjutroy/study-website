import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagemarkRoutingModule } from './pagemark-routing.module';
import { DetailmarkComponent } from './detailmark/detailmark.component';
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    DetailmarkComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PagemarkRoutingModule
  ]
})
export class PagemarkModule { }
