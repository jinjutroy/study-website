 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FooterComponent,
  HeaderComponent,
} from './views/shared/layouts'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRoutingModule } from './views/homepage/home-routing.module'; 

@NgModule({ 
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
