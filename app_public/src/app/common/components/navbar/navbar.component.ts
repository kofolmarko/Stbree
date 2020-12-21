import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { User } from '../../classes/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {/*
    // console.log(window.location.href);
    // if (window.location.href != 'http://localhost:4200/' && window.location.href != 'http://localhost:4200/prijava' && window.location.href != 'http://localhost:4200/registracija') {
    //   document.getElementById('fixing-navbar').classList.remove("fixed-top");
    //   document.getElementById('fixing-navbar').classList.remove("bg-transparent");
    //   document.getElementById('fixing-navbar').classList.add("bg-dark");
    // } else {
      document.getElementById('fixing-navbar').classList.add("fixed-top");
      document.getElementById('fixing-navbar').classList.remove("bg-dark");
      document.getElementById('fixing-navbar').classList.add("bg-transparent");
    //}*/
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public getUser(): string {
    const uporabnik: User = this.authenticationService.getCurrentUser();
    return uporabnik ? uporabnik.ime : 'Gost';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.authenticationService.isLoggedIn()) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('fixing-navbar').classList.add('scrolled');
      } else {
        document.getElementById('fixing-navbar').classList.remove('scrolled');
      }
    }
  }

}
