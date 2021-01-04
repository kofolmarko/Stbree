import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { InstructionsService } from '../../../services/instructions.service';

import { InstructionsEvent } from '../../../classes/event';
import { User } from '../../../classes/user';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { PovezavaService } from '../../../services/povezava.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  public jePovezava(): boolean {
    return this.povezavaStoritev.jePovezava;
  }

  constructor(
    private instructionsService: InstructionsService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private povezavaStoritev: PovezavaService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getEventInfo();
    this.isSignedUp();
  }

  public sporocilo: string = "";

  public dogodek: InstructionsEvent;

  public gostitelj: User;

  public editState: boolean = false;

  public isLoggedIn: boolean = this.authenticationService.isLoggedIn();

  public isAdmin: boolean = false;

  public signedStatus: boolean = false;

  private async getEventInfo(): Promise<void> {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let eventID = params.get('idDogodka');
          return this.instructionsService.getEventInfo(eventID);
        })
      )
      .subscribe(async (event: InstructionsEvent) => {
        this.dogodek = event;
        if (this.authenticationService.isLoggedIn()) {
          if (this.dogodek.emailInstruktorja === this.authenticationService.getCurrentUser().email) {
            this.isAdmin = true;
          }
        }
        this.sporocilo = event ? "" : "Dogodek ne obstaja :("
        event ? this.getEventHost() : null;

      });
  }

  private getEventHost(): void {
    this.instructionsService.getEventHost(this.dogodek.emailInstruktorja)
      .then(host => {
        this.gostitelj = host;
        this.sporocilo = host ? "" : "Ne najdem gostitelja dogodka :("
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri iskanju gostitelja dogodka."
        // console.error(error);
      });
  }

  editEventInfo(): void {
    this.editCSS(true);
    this.editState = true;
  }

  saveEventInfo(): void {
    this.editCSS(false);
    this.editState = false;
    this.instructionsService.editEventInfo(this.dogodek)
      .then(event => {
        event ? this.dogodek = event : this.sporocilo = "Napaka pri posdabljanju dogodka."
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri posodabljanju dogodka."
        //console.error(error);
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

  deleteEvent() {
    let eventID = this.route.snapshot.paramMap.get('idDogodka');
    this.instructionsService.deleteEvent(eventID)
      .subscribe(
        () => {
          this.dogodek = null;
          this.sporocilo = "Dogodek uspešno izbrisan."
        },
        (error) => this.sporocilo = "Napaka API-ja pri brisanju dogodka."
        //console.error(error)
      );
  }

  signUp() {
    if (this.dogodek.steviloProstihMest > 0) {
      let eventID = this.route.snapshot.paramMap.get('idDogodka');
      this.instructionsService.signUp(eventID)
        .then(response => {
          alert("Uspešno ste se prijavili na dogodek!");
          this.signedStatus = true;
        })
        .catch(error => this.sporocilo = error);
    } else {
      window.scroll(0, 0);
      this.sporocilo = "Prišlo je do napake, dogodek je že zapolnjen. Prosimo osvežite stran."
    }
  }

  private async isSignedUp(): Promise<void> {
    if (this.isLoggedIn) {
      let currentUserEmail = this.authenticationService.getCurrentUser().email
      await this.authenticationService.getUser(currentUserEmail)
        .then(user => {
          if (user) {
            user.dogodki.forEach(dogodek => {
              if (this.dogodek._id == dogodek._id) {
                this.signedStatus = true;
              }
            });
          }
        })
        .catch(error => {});
    }
  }

}
