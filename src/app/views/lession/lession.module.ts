import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';  
import { LessionComponent } from './lession.component';

@NgModule({
  imports: [ 
    BrowserModule  
  ],
  declarations: [  
    LessionComponent 
  ],   
  exports: [ 
    LessionComponent 
  ]
})
export class LessionModule { }
