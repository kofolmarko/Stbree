import { Component, OnInit } from '@angular/core';

import { InstructionsService} from '../../../services/instructions.service';

import { InstructionsEvent } from '../../../classes/event';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit {

  constructor(private instructionsService: InstructionsService) { }

  ngOnInit(): void {
  }

  public sporocilo = "";

  public novDogodek = new InstructionsEvent;

  postNewEvent(): void {
    // Hard coded idInstruktorja
    this.novDogodek.idInstruktorja = "randomHardCodedID123";
    this.instructionsService.postNewEvent(this.novDogodek)
    .then(status => {
      this.novDogodek = status;
      this.sporocilo = status.status == 'uspešno' ? "Dogodek uspešno objavljen :)" : "Napaka pri objavi dogodka :("
      console.log("Ustvariti bi morali ta dogodek: ");
    })
    .catch(error => {
      this.sporocilo = "Napaka API-ja pri objavi dogodka."
      console.error(error);
    });
  }

  logNewEvent() {
    console.log(this.novDogodek);
  }

}
