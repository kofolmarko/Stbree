import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komentarji-seznam',
  templateUrl: './komentarji-seznam.component.html',
  styleUrls: ['./komentarji-seznam.component.css']
})
export class KomentarjiSeznamComponent implements OnInit {

  public novKomentar = {
    naziv: '',
    ocena: 5,
    komentar: ''
  };
  
  public obrazecPrikazan: boolean = false;
  
  constructor() { }

  komentarji: Komentar[] = [{
    _id: "5fea45311d48a83b6b8dd016",
    avtor: "Anton Karlič",
    ocena: 4,
    besediloKomentarja: "Zelo jasna razlaga, bravo.",
    datum: "27.12.2020"
  },
  {
    _id: "bf39bux29n1e10mia2ms1dn3",
    avtor: "Anja Simonič",
    ocena: 2,
    besediloKomentarja: "Sploh mi ni bilo jasno, saj je veliko snovi obravnaval v kratkem času.",
    datum: "23.12.2020"
  },
  {
    _id: "nqbi9dqhd1nc10djw10smx2v",
    avtor: "Jurij Petje",
    ocena: 3,
    besediloKomentarja: "Zanimivo in originalno, a ponekod pomanjkljivo.",
    datum: "30.12.2020"
  }]

  ngOnInit(): void {
  }

}

export class Komentar {
  _id: string;
  avtor: string;
  ocena: number;
  besediloKomentarja: string;
  datum: string;
}
