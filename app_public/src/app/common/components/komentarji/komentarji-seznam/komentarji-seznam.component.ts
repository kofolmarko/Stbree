import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { InstructionsService } from '../../../services/instructions.service';

import { InstructionsEvent } from '../../../classes/event';
import { User } from '../../../classes/user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { CommentsService } from 'src/app/common/services/comments.service';
import { Komentar } from '../../../classes/comment'
import { PovezavaService } from '../../../services/povezava.service';


@Component({
  selector: 'app-komentarji-seznam',
  templateUrl: './komentarji-seznam.component.html',
  styleUrls: ['./komentarji-seznam.component.css']
})
export class KomentarjiSeznamComponent implements OnInit {

  public jePovezava(): boolean {
    return this.povezavaStoritev.jePovezava;
  }

  public newComment = {
    _id: '',
    avtor: '',
    ocena: null,
    datum: null,
    besediloKomentarja: ''
  };

  constructor(
    private commentsService: CommentsService,
    private instructionsService: InstructionsService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router,
    private povezavaStoritev: PovezavaService
  ) { }

  ngOnInit(): void {
    this.getEventInfo();
  }

  public obrazecPrikazan: boolean = false;

  public sporocilo: string = "";

  public dogodek;

  public komentar: Komentar;

  public gostitelj: User;

  public currentUserEmail: string = "";

  public editState = false;

  public editID = "";

  public editInfo = {
    besediloKomentarja: "",
    ocena: 5
  }

  public mojiKomentarji = [];

  postNewComment(): void {
    this.newComment.avtor = this.authenticationService.getCurrentUser().email;

    if (!this.newComment.avtor ||
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
  }

  deleteComment(commentID: string) {
    let eventID = this.route.snapshot.paramMap.get('idDogodka');
    console.log(commentID);
    this.commentsService.deleteComment(eventID, commentID)
      .subscribe(
        () => {
          this.komentar = null;
          this.sporocilo = "Komentar uspešno izbrisan."
          location.reload();
          alert("Komentar uspešno zbrisan!");
        },
        (error) => this.sporocilo = "Napaka API-ja pri brisanju komentarja."
        //console.error(error)
      );
  }

  saveComment(comment: Komentar): void {
    if (!this.editInfo.besediloKomentarja || !this.editInfo.ocena) {
      alert("Prosim izpolnite vsa polja, preden shranite komentar!");
    } else {
      this.editCSS(false, comment._id);
      this.editID = "";
      this.editState = false;
      comment.besediloKomentarja = this.editInfo.besediloKomentarja;
      comment.ocena = this.editInfo.ocena;
      this.commentsService.editComment(comment, this.dogodek)
        .then(comment => {
          comment ? alert("Uspešno posodobljen komentar!") : alert("Napaka pri posdabljanju komentarja.")
        })
        .catch(error => {
          alert("Napaka API-ja pri posodabljanju komentarja. Poskusite znova kasneje.");
          //console.error(error);
        });
    }
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

