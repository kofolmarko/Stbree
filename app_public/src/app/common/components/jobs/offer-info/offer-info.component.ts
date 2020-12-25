import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { JobsService } from '../../../services/jobs.service';

import { Job } from '../../../classes/job';
import { User } from '../../../classes/user';
// import { AuthenticationService } from 'src/app/common/services/authentication.service';

@Component({
  selector: 'app-offer-info',
  templateUrl: './offer-info.component.html',
  styleUrls: ['./offer-info.component.css']
})
export class OfferInfoComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {
  }
/*
  public sporocilo: string = "";
  
  public delo = Job;

  private async getJobInfo(): Promise<void> {
    this.route.ParamMap
      .pipe(
        switchMap((params: ParamMap) => {
          let jobID = params.get('idDela');
          return this.JobsService.getJobInfo(eventID);
        })
      )
      .subscribe(async (job: Job) => {
        this.delo = job;
        this.sporocilo = job ? "" : "Delo ne obstaja :("
      })
  }*/

}
