import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FavoriteButtonComponent} from '../shared/button/favorite-button.component'

@NgModule({
  declarations: [
    HomeComponent,
    FavoriteButtonComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
  ],
})
export class AppModule { }
