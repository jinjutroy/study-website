import { QuestionComponent } from './views/question/question.component';
import { HomeComponent } from './views/homepage/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LessionComponent } from './views/lession/lession.component';
import {PagenotfoundComponent} from "./views/pagelogin/pagenotfound/pagenotfound.component";
import {UserGuard} from "./core/guards/user.guard";
import { ScheduleComponent } from './views/schedule/schedule.component';
import { TeacherComponent } from './views/teacher/teacher.component';
import { StudentComponent } from './views/student/student.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lession', component: LessionComponent , children: [
    {
      path: 'lession/:id',  // child route pa 
      component: QuestionComponent,  // child route component that the router renders
    },
  ]},
  { path: 'schedule', component: ScheduleComponent },
  { path: 'search/teacher', component: TeacherComponent },
  { path: 'search/student', component: StudentComponent },
  { path: 'q&a', component: QuestionComponent },
  // {path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
