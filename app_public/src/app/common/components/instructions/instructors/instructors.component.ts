import { Component, OnInit } from '@angular/core';

import { InstructionsService } from '../../../services/instructions.service';

import { User } from '../../../classes/user';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  constructor(private instructionsService: InstructionsService) { }

  ngOnInit(): void {
    this.getInstructors();
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

  private sporocilo: string = "";

  public instruktorji: User[];

  private getInstructors(): void {
    this.instructionsService.getInstructors()
    .then(users => {
      console.log(users);
      this.instruktorji = users;
      this.sporocilo = users.length > 0 ? "" : "Ne najdem nobenega inštruktorja :("
    })
    .catch(error => {
      this.sporocilo = "Napaka API-ja pri iskanju inštruktorjev."
      console.log(error);
    });
  }
  
}