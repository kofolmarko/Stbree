import { Component, OnInit } from '@angular/core';

import { InstructionsService} from '../../../services/instructions.service';

import { InstructionsEvent } from '../../../classes/event';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { Router } from '@angular/router';
import { ThemeService } from 'ng2-charts';
import { User } from 'src/app/common/classes/user';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit {

  constructor(
    private instructionsService: InstructionsService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public sporocilo = "";

  public novDogodek = {
    _id: "",
    naziv: "",
    opis: "",
    cena: null,
    datum: null,
    ura: "",
    steviloProstihMest: null,
    emailInstruktorja: "",
    komentarji: null
  };

  postNewEvent(): void {
    this.novDogodek.emailInstruktorja = this.authenticationService.getCurrentUser().email;

    if(!this.novDogodek.naziv || 
      !this.novDogodek.opis || 
      !this.novDogodek.cena || 
      !this.novDogodek.datum || 
      !this.novDogodek.ura || 
      !this.novDogodek.steviloProstihMest) {
      this.sporocilo = "Prosimo izpolnite vsa polja!"
    } else {
      this.instructionsService.postNewEvent(this.novDogodek)
      .then(event => {
        this.novDogodek = event;
        this.sporocilo = event ? "Dogodek uspešno objavljen :)" : "Napaka pri objavi dogodka :("
        this.router.navigateByUrl('/instrukcije-dogodki/dogodek/' + this.novDogodek._id);
        alert("Dogodek uspešno objavljen!");
      })
      .catch(error => {
        this.sporocilo = "Napaka API-ja pri objavi dogodka."
        //console.error(error);
      });
    } 
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public isInstructor(): boolean {
    if(this.getCurrentUser().statusInstruktorja) {
      return true;
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    return(this.authenticationService.getCurrentUser());
  }

}
