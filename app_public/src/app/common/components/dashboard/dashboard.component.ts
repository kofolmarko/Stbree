import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { CovidService } from '../../services/covid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private covidService: CovidService
    //private chart: Chart
  ) { }

  ngOnInit(): void {
    this.getCovidInfo();
  }

  public sporocilo: string = "";

  public covidInfo: any;

  public chart: any = [];

  private getCovidInfo(): void {
    this.covidService.getCovidInfo()
    .then(covidInfo => {
      this.covidInfo = covidInfo;
      this.sporocilo = covidInfo.length > 0 ? "" : "Ne najdem nobenega informacij :("

      // New aray of all Cases elements
      let cases = covidInfo.map(covidInfo => covidInfo.Cases);
      let dates = covidInfo.map(covidInfo => covidInfo.Date);

      cases = cases.slice(cases.length - 10, cases.length);
      dates = dates.slice(dates.length - 10, dates.length);

      console.log(cases, dates);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: dates,
          datasets: [{
            label: 'My First dataset',
            backgroundColor: "blue",
            borderColor: "black",
            data: cases,
            fill: false,
          }]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Chart.js Line Chart'
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
                labelString: 'Month'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              }
            }]
          }
        }
      })
    })
    .catch(error => {
      this.sporocilo = "Napaka API-ja pri iskanju informacij o Covid-19."
      console.error(error);
    });
  }

  

}
