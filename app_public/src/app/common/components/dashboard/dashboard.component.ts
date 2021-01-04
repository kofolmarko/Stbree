import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { InstructionsEvent } from '../../classes/event';
import { Job } from '../../classes/job';
import { User } from '../../classes/user';
import { AuthenticationService } from '../../services/authentication.service';

import { CovidService } from '../../services/covid.service';
import { InstructionsService } from '../../services/instructions.service';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private covidService: CovidService,
    private authenticationService: AuthenticationService,
    private instructionsService: InstructionsService,
    private jobsService: JobsService,
    private router: Router
    //private chart: Chart
  ) { }

  ngOnInit(): void {
    if(!this.authenticationService.isLoggedIn()) {
      this.router.navigateByUrl('/prijava');
    } else {
      this.getCovidInfo();
      this.getCurrentUser();
    }
  }
 
  public sporocilo: string = "";

  public covidInfo: any;

  public chart: any = [];

  public uporabnik: User = null;

  public featuredInstructors: User[] = this.getFeatured("instructors");

  public featuredEvents: InstructionsEvent[] = this.getFeatured("events");

  public featuredOffers: Job[] = this.getFeatured("offers");

  private getCovidInfo(): void {
    this.covidService.getCovidInfo()
    .then(covidInfo => {
      this.covidInfo = covidInfo;
      this.sporocilo = covidInfo.length > 0 ? "" : "Trenutno ne najdem informacij, poskusite znova kasneje."

      // New aray of all Cases elements
      let cases = covidInfo.map(covidInfo => covidInfo.Cases);
      let dates = covidInfo.map(covidInfo => covidInfo.Date);

      cases = cases.slice(cases.length - 10, cases.length);
      dates = dates.slice(dates.length - 10, dates.length);

      let formatedDates = [];
      //console.log(cases, dates);
      dates.forEach(element => {
        formatedDates.push(formatDate(element, 'dd/MM', 'en'));
      });

      Chart.defaults.global.defaultFontSize = 13;

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: formatedDates,
          datasets: [{
            label: 'Trend naraščanja celotnega števila okužb s Covid-19 v Sloveniji v zadnjih 10 dneh',
            backgroundColor: "rgb(160, 49, 58)",
            borderColor: "black",
            borderWidth: 1,
            data: cases,
            fill: true,
          }]
        },
        options: {
          responsive: true,
          title: {

          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Datum'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Število okužb'
              }
            }]
          }
        }
      })
    })
    .catch(error => {
      this.sporocilo = "Trenutno ne najdem informacij, poskusite znova kasneje."
      // console.error(error);
    });
  }

  public getUsername(): string {
    return this.authenticationService.getCurrentUser().ime;
  }

  public getCurrentUser(): void {
    let currentUserEmail = this.authenticationService.getCurrentUser().email;
    this.authenticationService.getUser(currentUserEmail)
    .then(user => {this.uporabnik = user;})
    .catch(error => {});
  }

  public getCasesToday(): number {
    let cases = this.covidInfo.map(covidInfo => covidInfo.Cases);
    return (cases[cases.length - 1]);
  }

  private getFeatured(type: string): any[] {
    let featured: any[] = [];
    switch(type) {
      case 'instructors': {
        this.instructionsService.getInstructors()
        .then(instructors => {
          for(let i = 1; i < 4; i ++) {
            if(instructors[instructors.length - i]) {
              featured.push(instructors[instructors.length - i]);
            }
          }
        })
        .catch(error => {});
        break;
      }
      case 'events': {
        this.instructionsService.getEvents()
        .then(events => {
          for(let i = 1; i < 4; i ++) {
            if(events[events.length - i]) {
              featured.push(events[events.length - i]);
            }
          }
        })
        .catch(error => {});
        break;
      }
      case 'offers': {
        this.jobsService.getJobs()
        .then(offers => {
          for(let i = 1; i < 4; i++) {
            if(offers[offers.length - i]) {
              featured.push(offers[offers.length - i]);
            }
          }
        })
        .catch(error => {});
        break;
      }
    }

    return featured;
  }

}
