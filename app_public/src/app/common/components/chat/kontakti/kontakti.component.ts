import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User, Sporocila } from '../../../classes/user';
import { ChatService } from '../../../services/chat.service'; //ubistvu importas class ChatService
import { AuthenticationService } from 'src/app/common/services/authentication.service';

 
@Component({
  selector: 'app-kontakti',
  templateUrl: './kontakti.component.html',
  styleUrls: ['./kontakti.component.css']
})
export class KontaktiComponent implements OnInit {

  constructor(private chatStoritev: ChatService, private authenticationService: AuthenticationService) { }

  public podatkiKontakti: any;
  public podatkiSporocila: any;
  public showForm: boolean = false;

  public novKontakt: any = {
    emailKontakta: ''
  }

  public onClickForm(): void {
    this.showForm = true;
  }

  public dodajNovKontakt(): void {
    this.obrazecNapaka = "";
    if (this.soPodatkiUstrezni()) {
      
      // console.log("this.novKontakt.emailKontakta" + this.novKontakt.emailKontakta);
      this.chatStoritev
        .posljiKontakt(this.authenticationService.getCurrentUser().email, this.novKontakt)
        .then(kontakt => {
          // console.log("Kontakt shranjen", kontakt);
          this.novKontakt.emailKontakta = '';
          this.kliciPridobiKontakte();
          this.showForm = false;
        })
        .catch(napaka => this.obrazecNapaka = napaka);
    } else {
      this.obrazecNapaka = "Prosim vnesite sporočilo";
    }
  }

  public obrazecNapaka: string;

  private soPodatkiUstrezni(): boolean {
    if (this.novKontakt.emailKontakta) {
      return true;
    } else {
      return false;
    }
  }


  private kliciPridobiKontakte(): void {
    this.chatStoritev
        .pridobiKontakte(this.authenticationService.getCurrentUser().email)
        .then(servicePodatki => {this.podatkiKontakti = servicePodatki
          // for(var i = 0; i < this.podatkiKontakti.pridobljeniKontakti.length; i++){
          //   console.log("kontakt " + i + " " + this.podatkiKontakti.pridobljeniKontakti[i].ime)
          // }
      });
        
      }
      
      public kliciPridobiSporocila(idPrejmenika: string): void {
        this.chatStoritev
        .pridobiSporocila(this.authenticationService.getCurrentUser().email, idPrejmenika)
        .then(servicePodatki => this.podatkiSporocila = servicePodatki);
      }
      
      ngOnInit(): void {
        this.kliciPridobiKontakte()
        
      }

}
