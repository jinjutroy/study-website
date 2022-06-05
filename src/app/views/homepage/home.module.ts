import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core'; 

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component'; 

@NgModule({
  imports: [ 
    BrowserModule ,
    SharedModule,
    HomeRoutingModule 
  ],
  declarations: [ 
    HomeComponent
  ],  
})
export class HomeModule { }
