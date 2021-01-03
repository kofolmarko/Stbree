import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Router } from '@angular/router';

import { JobsService } from '../../../services/jobs.service';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { CommentsJobsService } from 'src/app/common/services/comments-jobs.service';

import { Komentar } from '../../../classes/comment'
import { Job } from '../../../classes/job';
import { User } from '../../../classes/user';
import { PovezavaService } from '../../../services/povezava.service';

@Component({
  selector: 'app-komentarji-seznam-dela',
  templateUrl: './komentarji-seznam-dela.component.html',
  styleUrls: ['./komentarji-seznam-dela.component.css']
})
export class KomentarjiSeznamDelaComponent implements OnInit {

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
    private commentsJobsService: CommentsJobsService,
    private JobsService: JobsService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private povezavaStoritev: PovezavaService
  ) { }

  ngOnInit(): void {
    this.getJobInfo();
  }

  public delo: Job;

  public isAdmin: boolean = false;

  public sporocilo: string = "";

  public ponudnik: User;

  public komentar: Komentar;

  public obrazecPrikazan: boolean = false;

  public currentUserEmail: string = "";

  public editState = false;

  public editID = "";

  public editInfo = {
    besediloKomentarja: "",
    ocena: 5
  }

  postNewComment(): void {
    this.newComment.avtor = this.authenticationService.getCurrentUser().email;

    if (!this.newComment.avtor ||
      !this.newComment.ocena ||
      !this.newComment.besediloKomentarja) {
      this.sporocilo = "Prosimo izpolnite vsa polja!"
    } else {
      console.log("Pošiljam podatke v service...");
      this.commentsJobsService.postNewComment(this.delo, this.newComment)
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
    let jobID = this.route.snapshot.paramMap.get('idDela');
    console.log(commentID);
    this.commentsJobsService.deleteComment(jobID, commentID)
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
      this.commentsJobsService.editComment(comment, this.delo)
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

  private async getJobInfo(): Promise<void> {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let jobID = params.get('idDela');
          return this.JobsService.getJobInfo(jobID);
        })
      )
      .subscribe(async (job: Job) => {
        this.delo = job;
        if (this.authenticationService.isLoggedIn()) {
          this.currentUserEmail = this.authenticationService.getCurrentUser().email;
        }
        this.sporocilo = job ? "" : "Delo ne obstaja :("
        job ? this.getJobHost() : null;

      });
  }

  private getJobHost(): void {
    this.JobsService.getJobHost(this.delo.emailPonudnika)
      .then(host => {
        this.ponudnik = host;
        this.sporocilo = host ? "" : "Ne najdem gostitelja dela :("
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri iskanju gostitelja dela."
        console.error(error);
      });
  }
}
