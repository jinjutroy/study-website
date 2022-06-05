import { LessionModule } from './views/lession/lession.module';
import { HomeModule } from './views/homepage/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './views/shared/shared.module';
 
import { NgModule } from '@angular/core'; 
import {
  FooterComponent,
  HeaderComponent,
} from './views/shared/layouts'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRoutingModule } from './views/homepage/home-routing.module'; 
import { QuestionComponent } from './views/question/question.component'; 

@NgModule({ 
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [   
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    SharedModule, 
    LessionModule,
  ],  
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
