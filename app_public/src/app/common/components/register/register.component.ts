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
    dogodki: null,
    dela: null,
    ocena: null,
    //datumVpisa: null,
    poslanaSporocila: null,
    kontakti: null
  }

  public loading = false;

  public gesloPotrdi = "";

  becomeAnInstructor(statusInstruktorja: any) {
    this.newUserData.statusInstruktorja = statusInstruktorja;
  }

  public crkeReg = new RegExp("^[a-zA-ZčžćšđČŽĆŠĐ\s]+$");
  public gesloReg = new RegExp("^.{8,20}$");

  public async submitRegisterData(): Promise<void> {
    if (
      !this.newUserData.ime ||
      !this.newUserData.priimek ||
      !this.newUserData.email ||
      !this.newUserData.geslo ||
      !this.gesloPotrdi
    ) {
      this.sporocilo = "Zahtevani so vsi podatki, prosim poskusite znova!";
    } else if (this.newUserData.geslo !== this.gesloPotrdi) {
      this.sporocilo = "Vneseni gesli se ne ujemata!";
    } else if (!this.crkeReg.test(this.newUserData.ime) || !this.crkeReg.test(this.newUserData.priimek)) {
      this.sporocilo = "Ime in priimek lahko vsebujeta le črke!"
    } else if (!this.gesloReg.test(this.newUserData.geslo)) {
      this.sporocilo = "Geslo mora vsebovati 8 do 20 znakov!"
    } else {
      let doesUserExist = null;
      await this.authenticationService.getUser(this.newUserData.email)
        .then((user) => {doesUserExist = user;})
        .catch((err) => {doesUserExist = null;});
      if (doesUserExist != null) {
        this.sporocilo = "Uporabnik s tem e-naslovom že obstaja."
      } else {
        this.loading = true;
        this.executeRegister();
      }
    }
  }

  private executeRegister(): void {
    this.authenticationService
      .register(this.newUserData)
      .then(() => {
        this.router.navigateByUrl("/my")
      })
      .catch(error => {
        this.sporocilo = error
      });
  }
}
