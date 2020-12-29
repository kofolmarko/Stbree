import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public sporocilo = "";

  public loginData = {
    _id: null,
    ime: "",
    priimek: "",
    email: "",
    geslo: "",
    statusInstruktorja: false,
    opis: "",
    telefonskaStevilka: null,
    dogodki: null,
    dela: null,
    ocena: null
    //datumVpisa: null
  }

  public passwordResetEmail = "";

  public submitLoginData(): void {
    if (
      !this.loginData.email ||
      !this.loginData.geslo
    ) {
      this.sporocilo = "Zahtevani so vsi podatki, prosim poskusite znova!";
    } else {
      this.executeLogin();
    }
  }

  private executeLogin(): void {
    this.authenticationService
      .login(this.loginData)
      .then(() => {
        this.router.navigateByUrl("/my")
      })
      .catch(error => {
        this.sporocilo = error
      });
  }
}
