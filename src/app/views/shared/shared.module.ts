import { BrowserModule } from '@angular/platform-browser';
import { FavoriteButtonComponent } from './button/favorite-button.component';
import { NgModule } from '@angular/core'; 
  

@NgModule({
  imports: [ 
    BrowserModule,
  ], 
  declarations: [  
    FavoriteButtonComponent,
  ],
  exports:[
    BrowserModule,
    FavoriteButtonComponent, 
  ]
})
export class SharedModule { }
