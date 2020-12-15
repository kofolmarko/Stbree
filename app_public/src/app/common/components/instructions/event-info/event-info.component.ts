import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { InstructionsService } from '../../../services/instructions.service';

import { InstructionsEvent } from '../../../classes/event';

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

  public sporocilo: string = "sporocilo";

  dogodek: any;

  private getEventInfo(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let eventID = params.get('idDogodka');
          return this.instructionsService.getEventInfo(eventID);
        })
      )
      .subscribe((event: any) => {
        this.dogodek = event[0];
        this.sporocilo = event ? "tukaj je dogodek" : "Dogodek ne obstaja :("
        console.log(this.dogodek);
      })    
  }

  public izpis(): void {
    console.log(this.dogodek);
  }

}
