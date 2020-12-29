import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { InstructionsService } from '../../../services/instructions.service';

import { InstructionsEvent } from '../../../classes/event';
import { User } from '../../../classes/user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { CommentsService } from 'src/app/common/services/comments.service';


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
    besediloKomentarja: '',
    emailUporabnika: ''
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

  private dogodek;

  public gostitelj: User;

  public isAdmin: boolean = false;

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

  postNewComment(): void {
    this.newComment.emailUporabnika = this.authenticationService.getCurrentUser().email;

    if(!this.newComment.avtor || 
      !this.newComment.ocena || 
      !this.newComment.besediloKomentarja) {
      this.sporocilo = "Prosimo izpolnite vsa polja!"
    } else {
      this.commentsService.postNewComment(this.dogodek,this.newComment)
      .then(comment => {
        this.newComment = comment;
        this.sporocilo = comment ? "Komentar uspešno objavljen :)" : "Napaka pri objavi komentarja :("
        this.router.navigateByUrl('/instrukcije-dogodki/dogodek/${event._id}' + this.newComment._id);
        alert("Komentar uspešno objavljen!");
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri objavi dogodka."
        //console.error(error);
      });
    } 
  }

  /* Testni podatki */
  
  komentarji: Komentar[] = [{
    _id: "5fea45311d48a83b6b8dd016",
    avtor: "Anton Karlič",
    ocena: 4,
    besediloKomentarja: "Zelo jasna razlaga, bravo.",
    datum: "27.12.2020"
  },
  {
    _id: "bf39bux29n1e10mia2ms1dn3",
    avtor: "Anja Simonič",
    ocena: 2,
    besediloKomentarja: "Sploh mi ni bilo jasno, saj je veliko snovi obravnaval v kratkem času.",
    datum: "23.12.2020"
  },
  {
    _id: "nqbi9dqhd1nc10djw10smx2v",
    avtor: "Jurij Petje",
    ocena: 3,
    besediloKomentarja: "Zanimivo in originalno, a ponekod pomanjkljivo.",
    datum: "30.12.2020"
  }]

}

export class Komentar {
  _id: string;
  avtor: string;
  ocena: number;
  besediloKomentarja: string;
  datum: string;
}
