import { Component, OnInit } from '@angular/core';

import { JobsService } from '../../../services/jobs.service';

import { Job } from 'src/app/common/classes/job';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  public sporocilo: string = "";

  public dela: Job[];

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

  private getJobs(): void {
    this.jobsService.getJobs()
    .then(jobs => {
      this.dela = jobs.reverse();
      this.sporocilo = jobs.length > 0 ? "" : "Ne najdem nobenega dela :("
    })
    .catch(error => {
      this.sporocilo = "Napaka API-ja pri iskanju del."
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