import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { InstructionsService } from '../../../services/instructions.service';

import { InstructionsEvent } from '../../../classes/event';
import { User } from '../../../classes/user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { CommentsService } from 'src/app/common/services/comments.service';
import { Komentar } from '../../../classes/comment'


@Component({
  selector: 'app-komentarji-seznam',
  templateUrl: './komentarji-seznam.component.html',
  styleUrls: ['./komentarji-seznam.component.css']
})
export class KomentarjiSeznamComponent implements OnInit {

  public newComment = {
    _id: '',
    avtor: '',
    ocena: null,
    datum: '',
    besediloKomentarja: ''
  };
  
  constructor(
    private commentsService: CommentsService,
    private instructionsService: InstructionsService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEventInfo();
  }

  public obrazecPrikazan: boolean = false;

  public sporocilo: string = "";

  public dogodek;

  public gostitelj: User;

  public isAdmin: boolean = false;

  public editState = false;

  postNewComment(): void {
    this.newComment.avtor = this.authenticationService.getCurrentUser().email;

    if(!this.newComment.avtor || 
      !this.newComment.ocena || 
      !this.newComment.besediloKomentarja) {
      this.sporocilo = "Prosimo izpolnite vsa polja!"
    } else {
      console.log("Pošiljam podatke v service...");
      this.commentsService.postNewComment(this.dogodek, this.newComment)
      .then(comment => {
        console.log("Uspešno prejeti podatki iz servica!");
        this.newComment = comment;
        this.sporocilo = comment ? "Komentar uspešno objavljen :)" : "Napaka pri objavi komentarja :("
        location.reload();
        //this.router.navigateByUrl('/instrukcije-dogodki/dogodek/${event._id}');
        alert("Komentar uspešno objavljen!");
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri objavi dogodka."
        //console.error(error);
      });
    } 
  }

  editEventInfo(): void {
    this.editCSS(true);
    this.editState = true;
  }

  saveEventInfo(): void {
    this.editCSS(false);
    this.editState = false;
    this.instructionsService.editEventInfo(this.dogodek)
      .then(event => {
        event ? this.dogodek = event : this.sporocilo = "Napaka pri posdabljanju dogodka."
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri posodabljanju dogodka."
        //console.error(error);
      });
  }

  private editCSS(isEdit): void {
    if (isEdit) {
      document.querySelector("edit-btn").classList.remove("d-ilblock");
      document.querySelector("edit-btn").classList.add("d-none");
      document.querySelector("save-btn").classList.remove("d-none");
      document.querySelector("save-btn").classList.add("d-ilblock");
    } else {
      document.querySelector("edit-btn").classList.remove("d-none");
      document.querySelector("edit-btn").classList.add("d-ilblock");
      document.querySelector("save-btn").classList.remove("d-ilblock");
      document.querySelector("save-btn").classList.add("d-none");
    }
  }

  private async getEventInfo(): Promise<void> {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let eventID = params.get('idDogodka');
          return this.instructionsService.getEventInfo(eventID);
        })
      )
      .subscribe(async (event: InstructionsEvent) => {
        this.dogodek = event;
        console.log(this.dogodek);
        if (this.authenticationService.isLoggedIn()) {
          if (this.dogodek.emailInstruktorja === this.authenticationService.getCurrentUser().email) {
            this.isAdmin = true;
          }
        }
        this.sporocilo = event ? "" : "Dogodek ne obstaja :("
        event ? this.getEventHost() : null;

      });
  }

  private getEventHost(): void {
    this.instructionsService.getEventHost(this.dogodek.emailInstruktorja)
      .then(host => {
        this.gostitelj = host;
        this.sporocilo = host ? "" : "Ne najdem gostitelja dogodka :("
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri iskanju gostitelja dogodka."
        console.error(error);
      });
  }

}

