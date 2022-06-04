import { Component } from '@angular/core'; 

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { 
  constructor() { 
  } 
  image: Array<string> = [
    "assets/images/slidebar.png",
    "assets/images/public/logo.png",
    "assets/images/public/logo.png"
  ];
  aboutus_image: string = "assets/images/aboutus.png";
  activityImageUrl: string = "assets/images/activity.png";
  
}
