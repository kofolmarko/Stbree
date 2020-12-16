import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { InstructionsService } from '../../../services/instructions.service';

import { InstructionsEvent } from '../../../classes/event';
import { User } from '../../../classes/user';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  constructor(
    private instructionsService: InstructionsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEventInfo();
  }

  public sporocilo: string = "";

  public dogodek: InstructionsEvent;

  public gostitelj: User;

  public editState: boolean = false;

  private getEventInfo(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let eventID = params.get('idDogodka');
          return this.instructionsService.getEventInfo(eventID);
        })
      )
      .subscribe((event: InstructionsEvent) => {
        this.dogodek = event;
        this.sporocilo = event ? "" : "Dogodek ne obstaja :("
        event ? this.getEventHost() : null;
      });
  }

  private getEventHost(): void {
    this.instructionsService.getEventHost(this.dogodek.idInstruktorja)
      .then(host => {
        this.gostitelj = host;
        this.sporocilo = host ? "" : "Ne najdem gostitelja dogodka :("
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri iskanju gostitelja dogodka."
        console.error(error);
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
        console.error(error);
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
      (error) => console.error(error)
    );
  }

}
