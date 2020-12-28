import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komentarji-seznam',
  templateUrl: './komentarji-seznam.component.html',
  styleUrls: ['./komentarji-seznam.component.css']
})
export class KomentarjiSeznamComponent implements OnInit {

  constructor() { }

  komentarji: Komentar[] = [{
    _id: "5fea45311d48a83b6b8dd016",
    avtor: "Anton Karlič",
    ocena: 4,
    besediloKomentarja: "Zelo jasna razlaga, bravo."
  }]

  ngOnInit(): void {
  }

}

export class Komentar {
  _id: string;
  avtor: string;
  ocena: number;
  besediloKomentarja: string;
}
