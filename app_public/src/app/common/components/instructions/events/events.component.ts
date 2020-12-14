import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

  dogodki: Dogodek[] = [
    {
      naziv: "Pretep",
      opis: "Cigoj vs Kavka"
    },
    {
      naziv: "Pobotanje",
      opis: "Pretep je bil polomija"
    }
  ]

  private sporocilo: string = "";

}

export class Dogodek {
  naziv: string;
  opis: string;
}