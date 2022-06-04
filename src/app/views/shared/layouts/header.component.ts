import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  img: string = 'assets/images/public/logo.png';

  public href: string = "";
  public active = "";
  constructor(private Location: Location) {
  }
  ngOnInit() {
    this.href = this.Location.path();
    this.active= this.href.slice(1);
    console.log(this.href);
    
  } 
  handlerClickNavbar = (e: any) => {
    const listItem = document.querySelectorAll(".nav-link");
    listItem.forEach(e => e.classList.remove("active"));
    this.active = e.target.id; 
  }
};