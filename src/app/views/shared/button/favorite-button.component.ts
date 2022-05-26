import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ["favorite-button.component.scss"]
})

export class FavoriteButtonComponent {
  @Input() favourite: boolean = true; 

  toggleFavorite() {
    console.log(this.favourite);

  }
}