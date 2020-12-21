import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
        const currentRoute = (eventUrl || []).join('');
        this.currentRoute = currentRoute;
        if(!this.isLoggedIn()) {
          try {
            this.fixNavbar(currentRoute);
          } catch {
            
          }
        }
      }
    });
  }

  ngOnInit(): void {
  }
  
  private currentRoute: string = "";

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
    
    if (!this.authenticationService.isLoggedIn() && !this.checkRoute(this.currentRoute)) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('fixing-navbar').classList.add('scrolled');
      } else {
        document.getElementById('fixing-navbar').classList.remove('scrolled');
      }
    }
  }

  private fixNavbar(currentRoute) {
    if(this.checkRoute(currentRoute)) {
      document.getElementById('fixing-navbar').classList.remove('fixed-top');
      document.getElementById('fixing-navbar').classList.add('scrolled');
    } else {
      document.getElementById('fixing-navbar').classList.add('fixed-top');
      document.getElementById('fixing-navbar').classList.remove('scrolled');
    }
  }

  private checkRoute(currentRoute) {
    if(currentRoute != "prijava" && currentRoute != "registracija" && currentRoute != "") {
      return true;
    } else {
      return false;
    }
  }

}
