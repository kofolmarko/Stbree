import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SortirajSporocilaPipe } from '../../../pipes/sortiraj-sporocila.pipe';
import { ChatService } from '../../../services/chat.service'; //ubistvu importas class ChatService
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { KontaktiComponent } from '../kontakti/kontakti.component';

@Component({
  selector: 'app-sporocila',
  templateUrl: './sporocila.component.html',
  styleUrls: ['./sporocila.component.css'],
  providers: [SortirajSporocilaPipe]
})
export class SporocilaComponent implements OnChanges {
  
  @Input() sporocila: any;
  
  constructor(
    private sortirajPipe: SortirajSporocilaPipe,
    private chatStoritev: ChatService,
    private authenticationService: AuthenticationService,
    private kontaktiComponent : KontaktiComponent
  ) { }
  
  public nimasSporocil: boolean = false;
  public idPrejemnika: string;

  public novoSporocilo: any = {
    besedilo: '',
    prejemnikSporocila: ''
  }

  public dodajNovoSporocilo(): void {
    this.obrazecNapaka = "";
    if (this.soPodatkiUstrezni()) {
      
      this.chatStoritev
        .posljiSporocilo(this.authenticationService.getCurrentUser().email, this.novoSporocilo)
        .then(sporocilo => {
          // console.log("Sporocilo shranjeno", sporocilo);
          if(this.sporocila === 'Z osebo še nimate pogovora. Pošli novo sporočilo.') this.sporocila = null;
          //this.sporocila.push(this.novoSporocilo.besedilo);
          this.novoSporocilo.besedilo = '';
          this.kontaktiComponent.kliciPridobiSporocila(this.idPrejemnika);
        })
        .catch(napaka => this.obrazecNapaka = napaka);
    } else {
      this.obrazecNapaka = "Prosim vnesite sporočilo";
    }
  }

  public obrazecNapaka: string;

  private soPodatkiUstrezni(): boolean {
    if (this.novoSporocilo.besedilo && this.novoSporocilo.prejemnikSporocila) {
      return true;
    } else {
      return false;
    }
  }

  ngOnChanges() {
    this.idPrejemnika = this.sporocila.drugiUser._id;
    this.sporocila = this.sortirajPipe.transform(this.sporocila, this.sporocila.drugiUser._id);
    this.novoSporocilo.prejemnikSporocila = this.idPrejemnika;
    
    if((this.sporocila[0]) == 'Z osebo še nimate pogovora. Pošli novo sporočilo.'){
      this.nimasSporocil = true;
    } else{
      this.nimasSporocil = false;
    }
  }

  
}
