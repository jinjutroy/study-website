
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
import { ScheduleComponent } from './views/schedule/schedule.component';
import { HomeComponent } from './views/homepage/home.component';
import { QuestionComponent } from './views/question/question.component';
import { LessionComponent } from './views/lession/lession.component';
import { NotificationComponent } from './views/shared/notification/notification.component';
import {PageloginModule} from "./views/pagelogin/pagelogin.module";
import {PageloginRoutingModule} from "./views/pagelogin/pagelogin-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { StudentComponent } from './views/student/student.component';
import { TeacherComponent } from './views/teacher/teacher.component';
import {PagemarkRoutingModule} from "./views/pagemark/pagemark-routing.module";
import {PagemarkModule} from "./views/pagemark/pagemark.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { TimetableteacherComponent } from './views/timetableteacher/timetableteacher.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ScheduleComponent,
    HomeComponent,
    QuestionComponent,
    LessionComponent,
    NotificationComponent,
    StudentComponent,
    TeacherComponent,
    TimetableteacherComponent],
  imports: [
    // HomeModule,
    BrowserModule,
    HomeRoutingModule,
    SharedModule,
    // LessionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PageloginRoutingModule,
    PageloginModule,
    AppRoutingModule,
    PagemarkRoutingModule,
    PagemarkModule,
    BrowserAnimationsModule,MatSnackBarModule



  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
