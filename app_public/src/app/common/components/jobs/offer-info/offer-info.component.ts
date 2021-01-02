import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { JobsService } from '../../../services/jobs.service';

import { Job } from '../../../classes/job';
import { User } from '../../../classes/user';
import { AuthenticationService } from 'src/app/common/services/authentication.service';

@Component({
  selector: 'app-offer-info',
  templateUrl: './offer-info.component.html',
  styleUrls: ['./offer-info.component.css']
})
export class OfferInfoComponent implements OnInit {

  constructor(
    private JobsService: JobsService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getJobInfo();
    this.isSignedUp();
  }

  public sporocilo: string = "";

  public delo: Job;

  public ponudnik: User;

  public editState: boolean = false;

  public isLoggedIn: boolean = this.authenticationService.isLoggedIn();

  public isAdmin: boolean = false;

  public signedStatus: boolean = false;

  private async getJobInfo(): Promise<void> {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let jobID = params.get('idDela');
          return this.JobsService.getJobInfo(jobID);
        })
      )
      .subscribe(async (job: Job) => {
        this.delo = job;
        if (this.authenticationService.isLoggedIn()) {
          if (this.delo.emailPonudnika === this.authenticationService.getCurrentUser().email) {
            this.isAdmin = true;
          }
        }
        this.sporocilo = job ? "" : "Delo ne obstaja :("
        job ? this.getJobHost() : null;
      })
  }

  private getJobHost(): void {
    this.JobsService.getJobHost(this.delo.emailPonudnika)
      .then(host => {
        this.ponudnik = host;
        this.sporocilo = host ? "" : "Ne najdem gostitelja dela :("
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri iskanju gostitelja dela."
        console.error(error);
      });
  }

  editJobInfo(): void {
    this.editCSS(true);
    this.editState = true;
  }

  saveJobInfo(): void {
    this.editCSS(false);
    this.editState = false;
    this.JobsService.editJobInfo(this.delo)
      .then(job => {
        job ? this.delo = job : this.sporocilo = "Napaka pri posodabljanju dela."
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri posodabljanju dela."
      });
  }

  private editCSS(isEdit): void {
    if (isEdit) {
      document.getElementById("edit-btn").classList.remove("d-ilblock");
      document.getElementById("edit-btn").classList.add("d-none");
      document.getElementById("save-btn").classList.remove("d-none");
      document.getElementById("save-btn").classList.add("d-ilblock");
      document.getElementById("eur").style.display = "none";
    } else {
      document.getElementById("edit-btn").classList.remove("d-none");
      document.getElementById("edit-btn").classList.add("d-ilblock");
      document.getElementById("save-btn").classList.remove("d-ilblock");
      document.getElementById("save-btn").classList.add("d-none");
      document.getElementById("eur").style.display = "inline";
    }
  }

  deleteJob() {
    let jobID = this.route.snapshot.paramMap.get('idDela');
    this.JobsService.deleteJob(jobID)
      .subscribe(
        () => {
          this.delo = null;
          this.sporocilo = "Delo uspešno izbrisano."
        },
        (error) => this.sporocilo = "Napaka API-ja pri brisanju dela."
      )
  }

  signUp() {
    if (this.delo.zasedeno == false) {
      let jobID = this.route.snapshot.paramMap.get('idDela');
      this.JobsService.signUp(jobID)
        .then(response => {
          alert("Uspešno ste se prijavili na delo!");
          this.signedStatus = true;
        })
        .catch(error => this.sporocilo = error);
    } else {
      window.scroll(0, 0);
      this.sporocilo = "Prišlo je do napake, delo je že zasedeno. Prosimo osvežite stran."
    }
  }

  private async isSignedUp(): Promise<void> {
    if (this.isLoggedIn) {
      let currentUserEmail = this.authenticationService.getCurrentUser().email
      await this.authenticationService.getUser(currentUserEmail)
        .then(user => {
          if(user) {
            user.dela.forEach(delo => {
              if (this.delo._id == delo._id) {
                this.signedStatus = true;
              }
            });
          }
        })
        .catch(error => console.log(error));
    }
  }
}