import { Component, OnInit } from '@angular/core';

import { InstructionsService } from '../../../services/instructions.service';

import { InstructionsEvent } from 'src/app/common/classes/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private instructionsService: InstructionsService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  public sporocilo: string = "";

  public dogodki: InstructionsEvent[];

  public page: Number = 1;

  public key: string = 'id';

  public reverse: boolean = false;

  isci() {
    var filter, list, a, txtValue, search;

    search = document.getElementById("search");
    list = document.getElementsByClassName("card");

    filter = search.value.toUpperCase();

    let i: number;

    for (i = 0; i < list.length; i++) {
      a = list[i].getElementsByClassName("card-title")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        list[i].style.display = "";
      } else {
        list[i].style.display = "none";
      }
    }
  }

  private getEvents(): void {
    this.instructionsService.getEvents()
    .then(events => {
      this.dogodki = events.reverse();
      this.sporocilo = events.length > 0 ? "" : "Ne najdem nobenega dogodka :("
    })
    .catch(error => {
      this.sporocilo = "Napaka API-ja pri iskanju dogodkov."
      console.error(error);
    });
  }

  sort() {
    this.key = this.getSelectValue();
  }

  reverseSet() {
    this.reverse = !this.reverse;
  }

  private getSelectValue(): string {
    return (<HTMLSelectElement>document.getElementById('razvrsti')).value;
  }

}