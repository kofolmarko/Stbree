import { Component, OnInit } from '@angular/core';

import { JobService, JobsService } from '../../../services/jobs.service';

import { Job } from '../../../classes/job';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { Router } from '@angular/router';
import { ThemeService } from 'ng2-charts';
import { User } from 'src/app/common/classes/user';

@Component({
  selector: 'app-offer-new',
  templateUrl: './offer-new.component.html',
  styleUrls: ['./offer-new.component.css']
})
export class OfferNewComponent implements OnInit {

  constructor(
    private jobsService: JobsService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public sporocilo = "";

  public novoDelo = {
    _id: "",
    naziv: "",
    opis: "",
    cena: null,
    datum: null,
    emailPonudnika: "",
    zasedeno: false
  }

  postNewJob(): void {
    this.novoDelo.emailPonudnika = this.authenticationService.getCurrentUser().email;

    if (!this.novoDelo.naziv ||
      !this.novoDelo.opis ||
      !this.novoDelo.cena ||
      !this.novoDelo.datum) {
      this.sporocilo = "Prosimo izpolnite vsa polja!"
    } else {
      this.jobsService.postNewJob(this.novoDelo)
      .then(job => {
        this.novoDelo = job;
        this.sporocilo = job ? "Delo uspešno objavljeno!" : "Napaka pri objavi dela :("
        this.router.navigateByUrl('ponudba-del/delo/' + this.novoDelo._id);
        alert("Dogodek uspešno objavljen!");
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri objavi dela."
      });
    }
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public getCurrentUser(): User {
    return(this.authenticationService.getCurrentUser());
  }

}
