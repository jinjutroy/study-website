import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../../core/services/pagelogin/auth.service";

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  favourite = true;
  img: string = 'assets/images/public/logo.png';
  public href: string = "";
  public active = "";
  username: string = "";

  constructor(private Location: Location, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.href = this.Location.path();
    this.active = this.href.slice(1);
    console.log(this.href);

    // @ts-ignore
    this.username = this.auth.getUser();
    console.log(this.username)
  }

  handlerClickNavbar = (e: any) => {
    const listItem = document.querySelectorAll(".nav-link");
    listItem.forEach(e => e.classList.remove("active"));
    this.active = e.target.id;

    if (e.target.classList.contains("dropdown-toggle")) {
      const e = document.querySelector(".dropdown-menu");
      e?.classList.add("show");
    } else {
      const e = document.querySelector(".dropdown-menu");
      e?.classList.remove("show");
    }
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl("/login");
    this.username='';
  }

}
