import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';   
import { QuestionComponent } from './question.component';

@NgModule({
  imports: [ 
    BrowserModule  
  ],
  declarations: [  
    QuestionComponent 
  ],   
  exports: [ 
    QuestionComponent 
  ]
})
export class LessionModule { }
