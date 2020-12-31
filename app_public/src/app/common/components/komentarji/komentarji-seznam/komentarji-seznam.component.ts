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

  public currentUserEmail: string = "";

  public editState = false;

  public editID = "";

  public mojiKomentarji = [];

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

  editComment(comment: Komentar): void {
    this.editCSS(true, comment._id);
    this.editID = comment._id;
    console.log(this.editID);
    this.editState = true;
  }

  saveComment(comment: Komentar): void {
    console.log(comment);
    this.editCSS(false, comment._id);
    this.editID = "";
    this.editState = false;
    this.commentsService.editComment(comment, this.dogodek)
      .then(comment => {
        comment ? alert("Uspešno posodobljen komentar!") : alert("Napaka pri posdabljanju komentarja.")
      })
      .catch(error => {
        alert("Napaka API-ja pri posodabljanju komentarja. Poskusite znova kasneje.");
        //console.error(error);
      });
  }

  private editCSS(isEdit: boolean, comment: string): void {
    if (isEdit) {
      document.getElementById("edit-btn-" + comment).classList.remove("d-ilblock");
      document.getElementById("edit-btn-" + comment).classList.add("d-none");
      document.getElementById("save-btn-" + comment).classList.remove("d-none");
      document.getElementById("save-btn-" + comment).classList.add("d-ilblock");
    } else {
      document.getElementById("edit-btn-" + comment).classList.remove("d-none");
      document.getElementById("edit-btn-" + comment).classList.add("d-ilblock");
      document.getElementById("save-btn-" + comment).classList.remove("d-ilblock");
      document.getElementById("save-btn-" + comment).classList.add("d-none");
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
          this.currentUserEmail = this.authenticationService.getCurrentUser().email;
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

