import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageManagerLessionRoutingModule } from './page-manager-lession-routing.module';
import { CreateLessiomComponent } from './create-lessiom/create-lessiom.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateLessiomComponent
  ],
    imports: [
        CommonModule,
        PageManagerLessionRoutingModule,
        ReactiveFormsModule
    ]
})
export class PageManagerLessionModule { }
