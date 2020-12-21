import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public sporocilo = "";

  public newUserData = {
    _id: null,
    ime: "",
    priimek: "",
    email: "",
    geslo: "",
    //gesloPotrdi: "",
    statusInstruktorja: false,
    opis: "Novo pečeni uporabnik.",
    telefonskaStevilka: null,
    dogodki: null
    //datumVpisa: null
  }

  public gesloPotrdi = "";

  becomeAnInstructor(statusInstruktorja: any) {
    this.newUserData.statusInstruktorja = statusInstruktorja;
  }

  public submitRegisterData(): void {
    if (
      !this.newUserData.ime ||
      !this.newUserData.priimek||
      !this.newUserData.email ||
      !this.newUserData.geslo ||
      !this.gesloPotrdi
    ) {
      this.sporocilo = "Zahtevani so vsi podatki, prosim poskusite znova!";
    } else if (this.newUserData.geslo !== this.gesloPotrdi) {
      this.sporocilo = "Vneseni gesli se ne ujemata!";
    } else {
      this.executeRegister();
    }
  }

  private executeRegister(): void {
    this.authenticationService
      .register(this.newUserData)
      .then(() => {
        this.router.navigateByUrl("/prijava")
      })
      .catch(error => {
        this.sporocilo = error
      });
  }

}
