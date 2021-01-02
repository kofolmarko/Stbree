import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { InstructionsService } from '../../services/instructions.service';
import { JobsService } from '../../services/jobs.service';

import events from './testni_podatki_events.json';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private instructionsService: InstructionsService,
    private jobsService: JobsService
  ) { }

  events = events;

  ngOnInit(): void {
  }

  public fillDB = () => {
    console.log(this.events);
    for(let i = 0; i < this.events.length; i++) {
      let date = new Date(this.events[i].datestring);
      this.events[i].datum = date;
      this.instructionsService.postNewEvent(this.events[i]);
    }
  };

  public dropDB = () => {

  };
}
