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

  private kliciPridobiKontakte(): void {
    this.chatStoritev
        .pridobiKontakte(this.authenticationService.getCurrentUser().email)
        .then(servicePodatki => this.podatkiKontakti = servicePodatki);
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
