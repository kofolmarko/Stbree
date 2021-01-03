import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { InstructionsService } from '../../services/instructions.service';
import { JobsService } from '../../services/jobs.service';
import { CommentsService } from '../../services/comments.service';
import { CommentsJobsService } from '../../services/comments-jobs.service';

import users from './test/users-tesni.json'
import events from './test/instrukcije-tesni.json';
import offers from './test/dela-testni.json'

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private instructionsService: InstructionsService,
    private jobsService: JobsService,
    private commentsService: CommentsService,
    private commentsJobsService: CommentsJobsService
  ) { }

  users = users;
  events = events;
  offers = offers;

  ngOnInit(): void {
  }

  public fillDB = async () => {
    console.log(this.users);
    console.log(this.events);
    console.log(this.offers);
    for (let i = 0; i < this.users.length; i++) {
      console.log("Registering...");
      let doesUserExist = null;
      await this.authenticationService.getUser(this.users[i].email)
        .then((user) => { doesUserExist = user; })
        .catch((err) => { doesUserExist = null; });
      if (doesUserExist != null) {
        continue;
      } else {
        await this.authenticationService.register(this.users[i]);
        let currentUserEmail = this.users[i].email;
        console.log(currentUserEmail);
        console.log("registered!");
        for (let j = 0; j < this.events.length; j++) {
          console.log(events[j].emailInstruktorja);
          if (currentUserEmail == this.events[j].emailInstruktorja) {
            console.log("Posting event...");
            let date = new Date(this.events[j].datestring);
            this.events[j].datum = date;
            await this.instructionsService.postNewEvent(this.events[j])
              .then((res) => {
                if (this.events[j].komentarji) {
                  for (let g = 0; g < this.events[j].komentarji.length; g++) {
                    this.commentsService.postNewComment(res, this.events[j].komentarji[g]);
                  }
                }
              });
            console.log("Posted!");
          }
        }
        for (let k = 0; k < this.offers.length; k++) {
          if (currentUserEmail == this.offers[k].emailPonudnika) {
            console.log("Posting job...");
            let date = new Date(this.offers[k].datestring);
            this.offers[k].datum = date;
            await this.jobsService.postNewJob(this.offers[k])
              .then((res) => {
                if (this.offers[k].komentarji) {
                  for (let g = 0; g < this.offers[k].komentarji.length; g++) {
                    this.commentsJobsService.postNewComment(res, this.offers[k].komentarji[g]);
                  }
                }
              });
            console.log("Posted!");
          }
        }
        console.log("Logging out...");
        await this.authenticationService.logout();
        console.log("Logged out!");
      }
    }
  };

  public dropDB = () => {
    this.authenticationService.dropDB();
  };
}
